# Technical Project Portfolio Website Template

This is a simple website to showcase your portfolio of technical projects. It's designed to be easy-to-use and requires no knowledge of web development to modify for your own purposes. All you need is to supply your own information about your projects and work experiences! This template is SEO friendly, mobile friendly, and accessible.

#### Here's a preview: [adriel-portfolio.vercel.app](adriel-portfolio.vercel.app/) 

#### Lighthouse Report:

![image](https://user-images.githubusercontent.com/59209071/155265536-cb319ba7-b326-4270-915e-4446eb3e7462.png)


## Getting Started:

1. Clone the repository with the following command:
   ```
   git clone https://github.com/adrielk/my-official-website.git
   ```
2. Enter the directory and run the development server:
   ```
   cd my-official-website
   npm run dev
   # or
   yarn dev
   ```
   This will host the website on on your computer. Open http://localhost:3000 with your browser to view the website.

## Modifying the Website Contents:

This website can easily be changed to display your own content by adding your own images or modifying .json files in the template. Let's get into it!

### Adding images:

Simply add your images under `public/images`. These images can either thumbnail images for the previews of your experiences or full sized images for the detailed view of your experiences.

The following are examples of previews:

The following is an example of a detailed view:

### Adding work experiences

Work experiences can be added by modifying `page_data/work.json`

The `work.json` contains a field called "works" which is an array in which all work experiences are stored:

```
{
    "works":[
        ...
    ]
}
```

A work experience with all its fields looks like this:

```
{
      "title": "Company name or descriptive title of your work",
      "role": "Your role",
      "blurb": "A short description of your work",
      "img": "Filename of image of your work",
      "img_alt": "Description of your image",
      "thumbnail": "Filename of thumbnail image of your work",
      "detailed": "A description of your work experience",
      "technologies": [
        "Technology 1",
        "Technology 2",
        ...
      ],
      "link": "Work experience link"
    }
```

The fields are `title`, `role`, `blurb`,`img`,`img_alt`, `thumbnail`, `detailed`, `technologies`, `link`.

You can add as many of these work experiences as you want to the "work" array. The `img_alt` field is required for accessibility and SEO.

### Adding Projects

Projects can be added by modifying `page_data/projects.json`

The `project.json` contains a field called "projects" which is an array in which all projects are stored:

```
{
    "projects":[
        ...
    ]
}
```

A project has the exact same structure as a work experience with all the same fields: `title`, `role`, `blurb`,`img`,`img_alt`,`thumbnail`, `detailed`, `technologies`, `link`.

However, I typically omit the `role` field since it's not very relevant to personal projects. The `img_alt` field is required for accessibility and SEO.

### Modifying your bio

Your short bio that is displayed on the home page is contained in `page_data/home.json`:

```
{
  "bio": "Description about yourself",
  "title": "Your title or current role",
  "name": "Your name",
  "img": "Filename of image of yourself",
  "img_alt": "Description of image"
}
```
Again, the `img_alt` field is required for accessibility and SEO.

### Adding your resume

A Google Doc preview link can be added to `page_data/resume.json`:

```
{
    "link":"Your resume's preview link"
}
```

Upload your resume to your Google Drive and paste the preview link in the `resume.json` file. See [here](https://learninginhand.com/blog/google-document-url-tricks) on how to get the preview link

### Adding your social links

You can add your social media links in `page_data/social_links.json`

### Adding Metadata

Metadata is important for search engine optimization (SEO) and providing an aesthetic preview of your site on social media sites such as LinkedIn, Twitter, or Facebook.
The fields relevant to social media previews are `image`, `url`, and `desc`. The other field are important for SEO.

You can modify metadata in `page_data/seo.json`:

```
{
  "author": "Your name",
  "url": "URL of your website",
  "desc": "Short description of the contents of your site",
  "keywords": "Comma, separated, key, words",
  "thumbnail_url": "URL of thumbnail image. You can upload your images on https://imgbb.com/",
  "project_page_title": "Title of project page",
  "project_page_desc": "Description of your project page",
  "work_page_title": "Title of work page",
  "work_page_desc": "Description of your work page",
  "resume_page_title": "Title of resume page",
  "resume_page_desc": "Description of your resume page"
}

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details!


## Making your website searchable on Google

Once you've deployed your website, you can make it appear in Google search results using the [URL Inspection Tool](https://support.google.com/webmasters/answer/9012289?hl=en).
Using this tool, you can [request indexing](https://support.google.com/webmasters/answer/9012289?hl=en#request_indexing) of your website URL. 

Note that you will need to change a small bit of code to verify your ownership of your website domain. If you haven't set up Goolge Search Console, follow these instructions first: [How to Set up Google Search Console](https://seranking.com/blog/how-to-set-up-google-search-console/).

In order to verify ownership of your site, you will need to replace a few lines of code with your <meta> tag in the `pages/_app.tsx` file. Replaces lines 16-19 with the <meta> tag provided by the Google Search Console.

The <meta> tag looks like this:

```
<meta
 name="google-site-verification"
 content="jDuXygcOqh5vnSvuFJSzJC01b6geuUSqpmO59_ZpL48"
/>
```

