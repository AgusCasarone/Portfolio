# Portfolio

This is my personal portfolio and an open project for anyone who wants to replicate it.

## What is this?

The EASIEST way to make a customizable and easy-to-update Portfolio + CV generation.

Here you will find links and previews for some of my projects, the option to export my CV on a .pdf file
**without any watermark** and the option to see it in Spanish or English.

This code can be cloned, customized and reused by anyone who wants it. Just follow the instructions on 
this ReadMe file and you will have your own personal version.

You are also very welcome to make any update you may find useful, add features you would like and 
collaborate in any way you want. Please let me know if you want to translate it into any language.

## *Why* is this?
Looking for a job is already a tedious work.
Creating, updating, styling, rendering, maintaining and caring for both a Portfolio and a CV are 
very exhausting parts of this experience. I know I am not the only one who wants some easy way 
to solve it all at once. So I took the time to make this integral solution once and for all. 

As I was preparing the project, I figured it could be *the easy way to solve it all at once* 
and tried to make it as easy for someone who wants to use it as possible.

## Make your own

You can change the views, colors, fonts, content and even decide if you want to get rid of any block, 
both on the page and the .pdf file that will be exported.

You will find a comment on each part you would need to change, but these are the main steps.

### Content

#### Brief general guide
You can edit each and every word and image following these steps: 

1. Go portfolio\public\assets\information
2. Each file is named after the block of information's name. Go to the file you want to edit.
3. Each file has an array of my own personal information. You can change it with your own, considering the following rules:
   1. Every text (fields marked as *string*) should be `"between quotation marks"`;
   2. Every entry should follow the given basic structure;
   3. Each entry should be surrounded with `{curly brackets}` and followed by a `,` comma;
   4. Each field of each entry should be followed by a `,` comma;
   5. If you want a new paragraph on the rendered text (the final result of the web app), you should use `\n` just like this:
        ```typescript
        {
          description: "Design, development and construction of a task organization and project categorization system. \n Responsible for technology selection, software design and development, and unit testing.",
        };
   6. If you want a new line on the code, close the `"quotation marks"` and add a `+` just like this:
      ```typescript
        {
          description: "Design, development and construction of a task organization and project categorization system." +
          "Responsible for technology selection, software design and development, and unit testing.",
        };

#### Detailed guide for each block
If you need further guidance, here you have the instructions for each block:
     
1. **Education**
   
   **File:** portfolio\public\assets\information\educationList.ts
   
   **Basic structure:**
    ```typescript
    {
      title: string,
      link?: string,
      institution: string,
      date: string,
      place: string,
      description?: string,
      order?: number
    },
    ```
    
    **How to fill:**
- title: The title you got or are pursuing;
- link: If you have it, the link to the certification or some official relevant document.
           On the page, people will be able to click on the title and be redirected to this link.
           This is not required, so in case you don't have it you can either leave it empty with `""` or don't include it at all;
- institution: The institution name;
- date: This is a string instead of a date so you can type what you feel is relevant.
           It will look like plain text just as you typed it. You can write any date format or even text describing how it is going:
           For example: `01/01/2020`, `2020`, `from 2020 to 2023`, `2020 - ongoing`, `started on October 2021 and abandoned`,
           `self-taught since 2020 and keeping updated`;
- place: The place in the world you studied this. `"Online"` is a perfectly valid option;
- description: Describe the profile of a graduate, the things you learn there, how this impacted your profile, etc. There is no characters limit.
- order: This list will be rendered on the order you set here. It is a number that indicates the code's position in the list,
           so *don't use quotation marks*. Number 1 will be at the top.
  
2. **Experience**
  
   **File:** portfolio\public\assets\information\experienceList.ts
  
   **Basic structure:**
   ```typescript
    {
      title: string,
      institution: string,
      date: string,
      place: string,
      description: string,
      technologies?: string[],
      order?: number
    },
    ```
   **How to fill:**
  - title: The title of your position;
  - institution: The institution/organization/company name;
  - date: This is a string instead of a date so you can type what you feel is relevant.
       It will look like plain text just as you typed it. You can write any date format or even text describing how it is going:
       For example: `01/01/2020`, `2020`, `from 2020 to 2023`, `2020 - ongoing`, `started on October 2021 and quit in 2022`,
       `personal project since 2020 and keeping updated`;
  - place: The place in the world where you had this experience. `"Online"` is a perfectly valid option and also `"Online from Argentina"`;
  - description: Describe your position, responsibilities, achievements, goals, roles, technologies used, working methologies,
       what you've learned from it, how it impacted your proffessional life or anything you want. There is no characters limit.
  - technologies: An array (list) of strings (texts). Each text is one technology.
       This is not required, so in case you don't have it you can either leave it empty with `[]` or don't include it at all;
    
       *How to fill this*
       1. The list should be surrounded by `[brackets]` and followed by a `,` comma;
       2. Each technology should be written between `"quotation marks"`;
       3. Each technology should be followed by a `,` comma;

           EXAMPLE:
           ```typescript
            {
              technologies: [
                  "Angular 18",
                  "TypeScript",
                  "Tailwind",
                ],
            },
            ```
   - order: This list will be rendered on the order you set here. It is a number that indicates the code's position in the list,
         so *don't use quotation marks*. Number 1 will be at the top. This field is not mandatory.
         If you don't use it, it will be rendered on the same order of the code.

3. **Hobby**
4. **Knowledge**
5. **Language**
6. **Personal Information**
7. **Skills**
8. **Social Media**


### Web Style

You can customize the colors and font for the page view.
It is based on this *[Figma Community design](https://www.figma.com/design/F9pH3o2t0Tm3I8yqtDP6zw/CV-color-light-english?node-id=0-1&t=UkZkRJjr50tIRWxX-0)*. If you are or know the author of this design, please let me know so I can tag them properly.

I also used this *[set of icons](https://www.figma.com/design/MG3lOwSBAqHkepaqp2P3JS/Heroicons-(Community)?t=kEf8puTgoyz2K9eU-0)* and this *[palete generator](https://palettte.app/)*.

1. Go to the portfolio\tailwind.config.js file.

2. **Colors**.
   
    Choose your palette and then set the HEX value in its corresponding place.
    It's important to remember to fill every one of the colors. 
    The ones you don't change will look like the original project.

    **MAIN PART**
   
    Education, Experience and My Skills.

    1. main-description-color: The text color on the main paragraphs. For example, the description of each position.
    2. main-title-color: The text color on the main title. For example, institutions' names and role titles.
    3. main-subtitle-color: The text color on the main subtitle. For example, the dates of each position.
    4. main-background-color: The background color on all the Main Part.

    **MISCELLANEOUS PART**
   
    Personal Information, Get in Touch, Industry Knowledge, Languages, Social Media and Hobbies.

    1. misc-primary-color: The text and icon color for almost everything.
    2. misc-secondary-color: The text and icon color for the last name, position and abled proficiency points.
    3. misc-teriary-color: The text and icon color for the disabled proficiency points.
    
    **BACKGROUND GRADIENT**
   
    The gradient behind everything. It shifts color on the Y axis (the direction you will be scrolling).
    If you want a solid color, the simplest way to do it (yet, not the cleanest)
    is by just setting the same color on every value here.

    1. page-backgound-top-gradient: The gradient will start on the top part of the page with this color.
    2. page-background-mid-gradient: The gradient will make a step on this color on the middle of the page.
    3. page-background-bottom-gradient: The gradient will end on the bottom part of the page with this color.

4. **Fonts**
    Set the portfolio-primary-font to the ones you chose. 
    Remember to import them correctly and check if everything is being render correctly.

    1. my-font: This project uses only one font for every text you see. You can see the details of the import
       and implementation of additional fonts by following the comments on the code or with the help of *[Tailwind documentation](https://tailwindcss.com/docs/font-family)*.
