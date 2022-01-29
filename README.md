# Technical Project Portfolio Website Template

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

The fields are `title`, `role`, `blurb`,`img`, `thumbnail`, `detailed`, `technologies`, `link`.

You can add as many of these work experiences as you want to the "work" array.

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

A project has the exact same structure as a work experience with all the same fields: `title`, `role`, `blurb`,`img`, `thumbnail`, `detailed`, `technologies`, `link`.

However, I typically omit the `role` field since it's not very relevant to personal projects.

### Modifying your bio

Your short bio that is displayed on the home page is contained in `page_data/home.json`:

```
{
  "bio": "Description about yourself",
  "title": "Your title or current role",
  "name": "Your name",
  "img": "Filename of image of yourself"
}
```

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
