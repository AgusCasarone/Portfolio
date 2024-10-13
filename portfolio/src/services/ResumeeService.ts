import { Injectable } from "@angular/core"
import { Education } from "../interfaces/education"
import { Experience } from "../interfaces/experience"
import { PersonalInfo } from "../interfaces/personal-info"
import { Skill } from "../interfaces/skill"
import pdfMake from "pdfmake/build/pdfmake"
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})
export class ResumeeService {

  generateCV(personalInfoDetail: PersonalInfo,
    educationList: Education[],
    experienceList: Experience[],
    skillList: Skill[]
  ) {
    const docDefinition: any = {
      info: {
        name: `CV-${personalInfoDetail.firstName}-${personalInfoDetail.lastName}`,
        author: 'Agustina Casarone',
        subject: 'CV',
        keywords: 'cv',
      },
      pageSize: 'A4',
      pageMargins: [ 40, 60, 40, 60 ],
      header: [
        {
          margin: [40, 10, 40, 10],
          columns: [
            [
              {
                text: `${personalInfoDetail.firstName} ${personalInfoDetail.lastName}`,
                fontSize: 28,
                color: 'main-title-color',
                bold: true
              },
              { text: `${personalInfoDetail.email }, ${personalInfoDetail.location}, ${personalInfoDetail.phone}` },
            ],
          ],
        },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      },
      content: [
        {
          text: 'Education',
          fontSize: 18,
          bold: true,
          decoration: 'underline',
          color: 'main-title-color',
        },
        {
          ...educationList.map(
            (education: Education) => {
              [
                education.title,
                education.date,
                education.place,
                education.institution,
                education.description ? education.description : ''
              ]
            }
          )
        },
        {
          text: 'Experience',
          fontSize: 18,
          bold: true,
          decoration: 'underline',
          color: 'main-title-color',
        },
        {
          ...experienceList.map(
            (experience: Experience) => {
              [
                experience.title,
                experience.date,
                experience.place,
                experience.institution,
                experience.description ? experience.description : '',
                experience.technologies
              ]
            }
          )
        },
        {
          text: 'Skills',
          fontSize: 18,
          bold: true,
          decoration: 'underline',
          color: 'main-title-color',
        },
        {
          ...skillList.map(
            (skill: Skill) => {
              [
                skill.name
              ]
            }
          ),
        }
      ]
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
