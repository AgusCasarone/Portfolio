# Portfolio

This is my personal portfolio and an open project for anyone who wants to replicate it.

## What is this?

Here you will find links and previews for some of my projects, the option to export my CV on a .pdf file
**without any watermark** and the option to see it in Spanish or English.

This code can be cloned, customized and reused by anyone who wants it. Just follow the instructions on 
this ReadMe file and you will have your own personal version.

You are also very welcome to make any update you may find useful, add features you would like and 
collaborate in any way you want. If you want to translate it into any language, please let me know.

## *Why* is this?
Looking for a job is already a tedious work.
Creating, updating, styling, rendering, maintaining and caring for both a Portfolio and a CV are 
very exhausting parts of this experience. I know I am not the only one that wants some easy way 
to solve it all at once. So I took the time to make this integral solution once and for all. 

As I was preparing the project, I figured it could be *the easy way to solve it all at once* 
and tried to make it as easy for someone who wants to use it as possible.

## Make your own

You can change the views, colors, fonts, content and even decide if you want to get rid of any block, 
both on the page and the .pdf file that will be exported.

You will find a comment on each part you would need to change, but these are the main steps.

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
