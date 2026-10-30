// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2025/03/26/plotly.html";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/05/01/tabs.html";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/29/typograms.html";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/28/post-citation.html";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/code-diff.html";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/echarts.html";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/chartjs.html";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/audios.html";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/24/videos.html";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/tables.html";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/07/04/diagrams.html";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/05/22/distill.html";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/10/20/math.html";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/07/15/code.html";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/05/15/images.html";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-eg-trans3dunet-is-accepted-at-ieee-isbi-2022",
          title: 'EG-Trans3DUNet is accepted at IEEE ISBI 2022. 🎉',
          description: "",
          section: "News",},{id: "news-verteformer-is-accepted-at-medical-physics",
          title: 'VerteFormer is accepted at Medical Physics. 🎉',
          description: "",
          section: "News",},{id: "news-semantic-difference-guidance-for-the-uncertain-boundary-segmentation-of-ct-left-atrial-appendage-is-accepted-at-miccai-2023",
          title: 'Semantic Difference Guidance for the Uncertain Boundary Segmentation of CT Left Atrial Appendage...',
          description: "",
          section: "News",},{id: "news-multi-site-multi-domain-airway-tree-modeling-is-accepted-at-medical-image-analysis",
          title: 'Multi-site, multi-domain airway tree modeling is accepted at Medical Image Analysis. 🎉',
          description: "",
          section: "News",},{id: "news-the-lnq-2023-challenge-paper-has-been-online",
          title: 'The LNQ 2023 Challenge paper has been online.',
          description: "",
          section: "News",},{id: "news-explicit-shape-priors-has-been-accepted-at-ieee-tmi",
          title: 'Explicit Shape Priors has been accepted at IEEE TMI. 🎉',
          description: "",
          section: "News",},{id: "news-dgci-is-accepted-at-miccai-2024",
          title: 'DGCI is accepted at MICCAI 2024. 🎉',
          description: "",
          section: "News",},{id: "news-pass-test-time-prompting-to-adapt-styles-and-semantic-shapes-in-medical-image-segmentation-is-accepted-at-ieee-tmi",
          title: 'PASS: Test-time Prompting to Adapt Styles and Semantic Shapes in Medical Image Segmentation...',
          description: "",
          section: "News",},{id: "news-the-miccai-2024-aortaseg24-challenge-paper-is-released",
          title: 'The MICCAI 2024 AortaSeg24 Challenge paper is released.',
          description: "",
          section: "News",},{id: "news-mo-diff-is-early-accepted-at-miccai-2025",
          title: 'Mo-Diff is early accepted at MICCAI 2025. 🎉',
          description: "",
          section: "News",},{id: "news-slord-is-accepted-at-ieee-jbhi-congrats",
          title: 'SLoRD is accepted at IEEE JBHI, congrats!',
          description: "",
          section: "News",},{id: "news-hasd-hierarchical-adaption-for-pathology-slide-level-domain-shift-is-accepted-at-miccai-2025",
          title: 'HASD: Hierarchical Adaption for Pathology Slide-level Domain-shift is accepted at MICCAI 2025. 🎉...',
          description: "",
          section: "News",},{id: "news-the-miccai-2024-topcow-challenge-paper-has-been-online",
          title: 'The MICCAI 2024 TopCoW Challenge paper has been online. 🎉',
          description: "",
          section: "News",},{id: "news-toposculpt-has-been-released",
          title: 'TopoSculpt has been released.',
          description: "",
          section: "News",},{id: "news-fb-diff-is-accepted-at-iccv-2025",
          title: 'FB-Diff is accepted at ICCV 2025. 🎉',
          description: "",
          section: "News",},{id: "news-from-pixels-to-pathology-restoration-diffusion-for-diagnostic-consistent-virtual-ihc-is-accepted-at-computers-in-biology-and-medicine",
          title: 'From Pixels to Pathology: Restoration Diffusion for Diagnostic-Consistent Virtual IHC is accepted at...',
          description: "",
          section: "News",},{id: "news-finally-pp-net-is-accepted-at-medical-image-analysis",
          title: 'Finally, PP-Net is accepted at Medical Image Analysis. 🎉',
          description: "",
          section: "News",},{id: "news-tubemllm-a-foundation-model-for-topology-knowledge-exploration-in-vessel-like-anatomy-is-online",
          title: 'TubeMLLM: A Foundation Model for Topology Knowledge Exploration in Vessel-like Anatomy is online....',
          description: "",
          section: "News",},{id: "news-sensenova-u1-is-now-online-we-introduce-a-unified-multimodal-model-which-outstands-in-text-understanding-vision-language-perception-knowledge-reasoning-agentic-decision-making-and-spatial-intelligence",
          title: 'SenseNova-U1 is now online! We introduce a unified multimodal model which outstands in...',
          description: "",
          section: "News",},{id: "news-trials-triphasic-aided-liver-lesion-segmentation-benchmark-has-been-online",
          title: 'TriALS: Triphasic-Aided Liver Lesion Segmentation Benchmark has been online. 🎉',
          description: "",
          section: "News",},{id: "news-consispace-has-been-online",
          title: 'Consispace has been online.',
          description: "",
          section: "News",},{id: "news-multi-class-segmentation-of-aortic-branches-and-zones-in-computed-tomography-angiography-has-been-accepted-at-medical-image-analysis",
          title: 'Multi-class segmentation of aortic branches and zones in computed tomography angiography has been...',
          description: "",
          section: "News",},{id: "news-vision-as-unified-multimodal-generation-is-now-online-we-introduce-a-multimodal-model-unifying-all-computer-vision-tasks",
          title: 'Vision as Unified Multimodal Generation is now online! We introduce a multimodal model...',
          description: "",
          section: "News",},{id: "news-topcow-challenge-paper-has-been-accepted-at-nejm-ai",
          title: 'TopCoW challenge paper has been accepted at NEJM AI. 🎉',
          description: "",
          section: "News",},{id: "news-cale-clinical-agents-last-exam-is-open-for-contributions",
          title: 'CALE: Clinical Agents’ Last Exam is open for contributions!',
          description: "",
          section: "News",},{id: "news-sensenova-u1-5-towards-native-unified-visual-intelligence-has-been-online",
          title: 'SenseNova-U1.5: Towards Native Unified Visual Intelligence has been online.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6A%74%75_%79%6F%75%78%69%6E@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AlexYouXin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xin-you-bb473a374", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Xin-You-19/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qzW9e80AAAAJ&hl=en", "_blank");
        },
      },{
        id: 'social-alphaxiv',
        title: 'Alphaxiv',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alphaxiv.org/@xin-you-2", "_blank");
        },
      },{
        id: 'social-openreview',
        title: 'Openreview',
        section: 'Socials',
        handler: () => {
          window.open("https://openreview.net/profile?id=~Xin_You1", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
