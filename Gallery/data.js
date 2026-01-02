// Gallery items
const galleryItems = [
    {
        "id": 1,
        "title": "Certification Exam 7",
        "category": "Examination",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQG9_fSsi2PSrg/feedshare-shrink_2048_1536/B56ZtuXdFfGsAw-/0/1767083203204?e=1769040000&v=beta&t=uk0lSCTMFWzFmNOw3CrvgJERfssGmaW-Wn9YDk9hKgA",
        "date": "December 28, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_fullstackdevelopment-certificationexam-webplusacademy-activity-7411684159552671744-TNqE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 2,
        "title": "Ethical Hacking Workshop",
        "category": "Workshops",
        "imageUrl": "https://res.cloudinary.com/dqg8ameoa/image/upload/v1767253391/1765793600799_ddkur1.jpg",
        "date": "October 26, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_cybersecurityworkshop-saredufywebplusacademy-activity-7406275172451770368-PDw_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "square"
    },
    {
        "id": 3,
        "title": "Orientation FSD_B8",
        "category": "Events",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHmuc6tFXawVw/feedshare-shrink_2048_1536/B56Zshe9paKIAw-/0/1765793326312?e=1769040000&v=beta&t=r4sewf_nR4FEcqNTB9IUuDiqtAmcmCfm0Cbx2N9bHOg",
        "date": "November 09, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_saredufywebplusacademy-batch8-fullstackdevelopment-ugcPost-7406274019974594561-zPAt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "square"
    },
    {
        "id": 4,
        "title": "SIET, Workshop",
        "category": "Events",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQH-cF60iZ9FYA/feedshare-shrink_1280/B56ZkyakzQKEAw-/0/1757487453796?e=1769040000&v=beta&t=EieYEemfb3QjLTSvF78oKwIINWItfoWpPIZ6FigCUKY",
        "date": "September 09, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_%F0%9D%90%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%9D%F0%9D%90%A0%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%88%F0%9D%90%9D%F0%9D%90%9E%F0%9D%90%9A%F0%9D%90%AC-%F0%9D%90%84%F0%9D%90%B1%F0%9D%90%9E%F0%9D%90%9C-activity-7371436673403904000-rVEx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "square"
    },
    {
        "id": 5,
        "title": "Chief Guests at SIET",
        "category": "Events",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHGy9WzQeLZWw/feedshare-shrink_1280/B56ZjP7p6ZHAAw-/0/1755835182498?e=1769040000&v=beta&t=bGEbkn_HErOLHLXCZ-bw_RXoBipASijAB4D_KyNsovw",
        "date": "August 22, 2025",
        "description": "https://www.linkedin.com/feed/update/urn:li:activity:7364506537953853441",
        "aspectRatio": "landscape"
    },
    {
        "id": 6,
        "title": "SWPA Founder as Chief Guest",
        "category": "Events",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQG-U80uKZk2RA/feedshare-shrink_2048_1536/B56ZjP7p6dG4A4-/0/1755835180717?e=1769040000&v=beta&t=QrAv3dTAv7xbZNFC2MhXUtVtGIdX3K1WmlYhtRcG8-A",
        "date": "August 22, 2025",
        "description": "https://www.linkedin.com/feed/update/urn:li:activity:7364506537953853441",
        "aspectRatio": "landscape"
    },
    {
        "id": 7,
        "title": "Co-Founder as Chief Guest",
        "category": "Events",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQG_xyC8VBs3hw/feedshare-shrink_1280/B56ZjP7p6dG0Aw-/0/1755835180476?e=1769040000&v=beta&t=s2WljZWrwO8DqguM0rro7s9YfzmfwmR2a6J1WrnXfyw",
        "date": "August 22, 2025",
        "description": "https://www.linkedin.com/feed/update/urn:li:activity:7364506537953853441",
        "aspectRatio": "landscape"
    },
    {
        "id": 8,
        "title": "Chief Guests at SIET",
        "category": "Events",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEvQBAk2ckgSg/feedshare-shrink_2048_1536/B56ZjP7p6hHUBA-/0/1755835180441?e=1769040000&v=beta&t=YgJ9xFcYZltcKEHrPlcynUfbmVJZenhO9DGrkU_ka4I",
        "date": "August 22, 2025",
        "description": "https://www.linkedin.com/feed/update/urn:li:activity:7364506537953853441",
        "aspectRatio": "landscape"
    },
    {
        "id": 9,
        "title": "CXO-level networking event",
        "category": "Events",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQG0nbA9uGpWyg/feedshare-shrink_1280/B56ZhGr8WsG4Ak-/0/1753532584513?e=1769040000&v=beta&t=Hr-ICyBwycAjlnZ7hdNgONmzQ9QYk9JfBs5N4mLSwLU",
        "date": "July 26, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_synergynexus-bengaluruedition-proudfounder-activity-7354848747756965888-vIzl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "portrait"
    },
    {
        "id": 10,
        "title": "FSD Workshop, Online",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQE3BsFle-6dyg/feedshare-shrink_2048_1536/B56ZnoXh9YJYAw-/0/1760540108432?e=1769040000&v=beta&t=0zOgkpy79jKrMWPL7XbeHckEeB2rHo_fgjg18dNnNew",
        "date": "October 15, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_webdevelopment-bootcamp-saredufywebplusacademy-activity-7384240428205871104-jUR0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 11,
        "title": "1st Salary, #SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHnEXVmw7f1Xw/feedshare-shrink_2048_1536/B56Zc0E7QPGsAs-/0/1748925397020?e=1769040000&v=beta&t=m6y9fuO_jP0sLkIxfS322gKXNz_HjdiTR3PJFw-VPAU",
        "date": "June 03, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_salaryday-trainersuccess-saredufy-activity-7335524798736814084-0yqc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 12,
        "title": "Interns Training, #SWPA",
        "category": "Classroom",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQGQ8AnaZEVqJw/feedshare-shrink_2048_1536/B56Zd_H.ONG0As-/0/1750184486532?e=1769040000&v=beta&t=gHTIUdsohymPG8xBY8K_Rff7Oq0UxjWYn9OOx8JEtMQ",
        "date": "June 17, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_frontendinternship-webdevelopment-webplusacademy-activity-7340805801340452866-W9hD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "portrait"
    },
    {
        "id": 13,
        "title": "Salary Day, #SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEvv87QjiBHew/feedshare-shrink_2048_1536/B56Zc0E7P4HUAs-/0/1748925397068?e=1769040000&v=beta&t=d1FYy9rJqNHyhrT15YYER6qcGPeh8sD4tgpjnkLMqBg",
        "date": "June 03, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_salaryday-trainersuccess-saredufy-activity-7335524798736814084-0yqc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 14,
        "title": "Salary Day, #SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHKNxb31XEg8Q/feedshare-shrink_2048_1536/B56Zc0E7QFHgAw-/0/1748925398061?e=1769040000&v=beta&t=iuftR1zVJFbm8hlDX_bgdgj0DFSIA39VDtOkgMyqpeM",
        "date": "June 03, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_salaryday-trainersuccess-saredufy-activity-7335524798736814084-0yqc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 15,
        "title": "Offline Internship B2",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEym83QmC0FuQ/feedshare-shrink_2048_1536/B56ZbTar8SHgAo-/0/1747303714044?e=1769040000&v=beta&t=XNLRua1sJ6RYEE_fv2eO6KHMijfgdaJuBJP7oCx55wk",
        "date": "May 15, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_internshipjourney-realworldprojects-fullstackdeveloper-ugcPost-7328722962763730945-tYYv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 16,
        "title": "Stipend Internship",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQGpvFvusaosaA/feedshare-shrink_2048_1536/B56ZbTar8eH4CM-/0/1747303713362?e=1769040000&v=beta&t=QFBD4yvN5MjQa6UOBOGD7hdbXLq7b3I_KaLyDCm5pOI",
        "date": "May 15, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_internshipjourney-realworldprojects-fullstackdeveloper-ugcPost-7328722962763730945-tYYv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 17,
        "title": "Stipend Internship",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQFb6jy0jXrKBg/feedshare-shrink_2048_1536/B56ZbTar8gHgAo-/0/1747303713359?e=1769040000&v=beta&t=h1iuBJT6tIVxKaP20fOBx6WdCAfegcdmgt8l_w1uU_I",
        "date": "May 15, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_internshipjourney-realworldprojects-fullstackdeveloper-ugcPost-7328722962763730945-tYYv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 18,
        "title": "Project Submit Interns",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D4D22AQGCiTe8330FVw/feedshare-shrink_2048_1536/B4DZbNphRZG8Aw-/0/1747206936958?e=1769040000&v=beta&t=wYO9rJoTmQ4yFWhmAtWAw2oZrlT-YQLZFK-t56WbjRE",
        "date": "May 14, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_saredufy-b2batch-internshipjourney-ugcPost-7328317050563588096-Rx3-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 19,
        "title": "Offline Internship B3",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHxq9v2YHGrkg/feedshare-shrink_2048_1536/B56ZbEqW6zHgAo-/0/1747056161885?e=1769040000&v=beta&t=eN4c9E_UZ_2V3uR78fy1MvHiEQqLftNv-2pyYqBgDSQ",
        "date": "May 12, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_saredufy-b3batch-realworldprojects-ugcPost-7327684661042651138-XExW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 20,
        "title": "Project Submit Interns",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQGx3-8IkcXxzg/feedshare-shrink_2048_1536/B56ZbEqW7KHUA8-/0/1747056161870?e=1769040000&v=beta&t=CwQ8jX8SvRmzQEIJWQwAvXyYMKU5jmkGD4ent07pTrU",
        "date": "May 12, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_saredufy-b3batch-realworldprojects-ugcPost-7327684661042651138-XExW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 21,
        "title": "Project Submit Interns",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQG3jEjnYjM4oA/feedshare-shrink_2048_1536/B56ZbEqW61HUAs-/0/1747056161746?e=1769040000&v=beta&t=aYLuup2ZFuR_KcwEpcedfzsM-x5h6b9BDY2Bg03sgrY",
        "date": "May 12, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_saredufy-b3batch-realworldprojects-ugcPost-7327684661042651138-XExW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 22,
        "title": "Offline Internship",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQFY5tQPhzAiBg/feedshare-shrink_2048_1536/B56ZbEqW7BGkAo-/0/1747056163048?e=1769040000&v=beta&t=_gvHyeh79-S8LkYWoKyNywcdiijFuS3V5NJ86gLRWVA",
        "date": "May 12, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_saredufy-b3batch-realworldprojects-ugcPost-7327684661042651138-XExW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 22,
        "title": "Salary Day",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEFfeQskSfqHw/feedshare-shrink_1280/B56Za_9e4GGkAk-/0/1746977302922?e=1769040000&v=beta&t=EX-JeaSjx4kEsmdSYDIOrE7nHZnQS91Fd_SSQ7by-j0",
        "date": "May 11, 2025",
        "description": "https://www.linkedin.com/posts/dandala-rupa-sree-837731230_startupculture-learningopportunities-saredufywebplusacademy-ugcPost-7327354129675182080-qFpC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 23,
        "title": "Share Distribution",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHdJL3rrpaYMw/feedshare-shrink_2048_1536/B56ZaeuyL2GkAo-/0/1746419788644?e=1769040000&v=beta&t=dEfvA0SO6-9dnXGDLle6ti-6io5wTKMLoxUhs6RGIwM",
        "date": "May 05, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_webplusacademy-vicechairman-firstsalary-ugcPost-7325015510679519233-oGto?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 24,
        "title": "First Anniversary - SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHnsPOhKxrFhQ/feedshare-shrink_2048_1536/B56ZacEPPdGoAs-/0/1746375080172?e=1769040000&v=beta&t=knVOwGTAhPUQkQaeWLdUzhibGJMYmRkAMH82TgB_Dh4",
        "date": "May 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_webplusacademy-1stanniversary-celebrationvibes-ugcPost-7324827993581740032-JoGr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 25,
        "title": "First Anniversary - SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQGHOQGhwhh3-w/feedshare-shrink_800/B56ZacEPPdGUAg-/0/1746375080329?e=1769040000&v=beta&t=YeR_LpFtmXBFePylYWkax8A3PHnErB_0sPCr7oZlppk",
        "date": "May 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_webplusacademy-1stanniversary-celebrationvibes-ugcPost-7324827993581740032-JoGr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 26,
        "title": "Offline Workshop, Tirupati",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEmXwMrKeLGmw/feedshare-shrink_2048_1536/B56ZV_zBqOHEAs-/0/1741605839835?e=1769040000&v=beta&t=ElC1xHf247g6tw3DRL-C59z6Rb-xwp70P_BT7s3Nq0c",
        "date": "March 10, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_webdevelopment-cssworkshop-techeducation-ugcPost-7304824350472380416-GhT5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 27,
        "title": "Resource Person - MITS",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQE-W671caXF_w/feedshare-shrink_1280/B56ZVm9aPUHEAk-/0/1741189129869?e=1769040000&v=beta&t=fml7POjN4Iaqhk9YKj1ipooojkcM3lMps0ePdXuUD64",
        "date": "March 05, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_uiuxdesign-workshop-webplusacademy-ugcPost-7303076541444341760-zdyV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 28,
        "title": "UI/UX Workshop - MITS",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHrU_s-AvghhQ/feedshare-shrink_1280/B56ZVm9aOfHsAk-/0/1741189129790?e=1769040000&v=beta&t=35pv1eFRajeMocoP2bO0lLhLUz5-wppaWpxv9ktGhRc",
        "date": "March 05, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_uiuxdesign-workshop-webplusacademy-ugcPost-7303076541444341760-zdyV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 29,
        "title": "UI/UX Workshop - MITS",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQFnxxzYyHHqiQ/feedshare-shrink_1280/B56ZVm9aPSHQAk-/0/1741189129921?e=1769040000&v=beta&t=-7qf3AOi3fQ8VIiYk0_AHH2wLmr5v7A7FIl7CTGHa7I",
        "date": "March 05, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_uiuxdesign-workshop-webplusacademy-ugcPost-7303076541444341760-zdyV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 30,
        "title": "Padmavathi Women's Degree",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQF41NWcf0mkAQ/feedshare-shrink_2048_1536/B56ZVCZALXGUAo-/0/1740575607860?e=1769040000&v=beta&t=TQEr-o0QklYL28YdZkE8xGYit8NKR658DlOAiConsCI",
        "date": "February 26, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_webdevelopment-industrialtraining-workshop-activity-7300503249730580481-IHcS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 31,
        "title": "Padmavathi Women's Degree",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQG4v29BkDA4zw/feedshare-shrink_2048_1536/B56ZVCZAKOHoAs-/0/1740575606813?e=1769040000&v=beta&t=laq4sbsvxDDVgr3bCLfKrHSSz3bbeR1YvYq90TD4sLM",
        "date": "February 26, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_webdevelopment-industrialtraining-workshop-activity-7300503249730580481-IHcS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 32,
        "title": "Padmavathi Women's Degree", 
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHT83SCygpvqw/feedshare-shrink_2048_1536/B56ZVCZALxHQAs-/0/1740575608796?e=1769040000&v=beta&t=v9weZmkquvWTlpSBH9y3cqtIdoweOKErf_sqz1SV0-Q",
        "date": "February 26, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_webdevelopment-industrialtraining-workshop-activity-7300503249730580481-IHcS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 33,
        "title": "Padmavathi Women's Degree",
        "category": "Workshops",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEIuU53nkI0Xw/feedshare-shrink_2048_1536/B56ZVCZALoHoAo-/0/1740575608567?e=1769040000&v=beta&t=VNkzgEBLyJ1fJLjEhZ942zAkVIXNpJE-78tyk6psiYM",
        "date": "February 26, 2025",
        "description": "https://www.linkedin.com/posts/saran-velmurugan-357499238_webdevelopment-industrialtraining-workshop-activity-7300503249730580481-IHcS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 34,
        "title": "Headquaters Opening, Tirupati",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQFY4qHtmY8Nrw/feedshare-shrink_1280/B56ZTa5biYGUAo-/0/1738839276561?e=1769040000&v=beta&t=NvXRTANGuuwW0rLf2-sQMncuvC3Ua8_W2uqtmH__dQY",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "portrait"
    },
    {
        "id": 35,
        "title": "Founder & Co-Founder",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEnd5lt4Wnr3A/feedshare-shrink_1280/B56ZTUjCNXHoAo-/0/1738732761703?e=1769040000&v=beta&t=vBqfulK937YxT4LZBetQ2y2dYPrCJF0aD1fVEH_PFH8",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "portrait"
    },
    {
        "id": 36,
        "title": "Team members - SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQG1BeofioziJA/feedshare-shrink_1280/B56ZTa5biRHEAk-/0/1738839276478?e=1769040000&v=beta&t=fx3iqpseZKn065FQVUk739FNaJ5J3PgKBFsvaS3AjwU",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "portrait"
    },
    {
        "id": 37,
        "title": "Ribbon Cutting SWPA Office",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQGQEJj0gXUSHQ/feedshare-shrink_2048_1536/B56ZTa5biwGUAo-/0/1738839276765?e=1769040000&v=beta&t=Hq9RQdwXECF3SW4X9Y8JyZmgDAQjmLBfUVRbk1rRF4k",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    
    {
        "id": 38,
        "title": "Team members - SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHMdtZDyoODng/feedshare-shrink_2048_1536/B56ZTa5biPHsAs-/0/1738839276926?e=1769040000&v=beta&t=50DlVHyIjQff85u8iZ9HBgznJ--jJG3KzfPHxvQYHPU",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 39,
        "title": "Team members - SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHQuu8iBzWDoA/feedshare-shrink_800/B56ZTa5bhxGoAg-/0/1738839276181?e=1769040000&v=beta&t=5TNTcsV7iKZ5CoIb1xNv4qRPRDUVIiI_yHePdA-doIQ",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 40,
        "title": "Name plate est. Founder",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHVkQILdNlO4w/feedshare-shrink_1280/B56ZTa5bh.GUAo-/0/1738839276410?e=1769040000&v=beta&t=NivWawNkZvhxkGoohdwOo_bFJH8E6rtgkxzlm5PvOxU",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    {
        "id": 41,
        "title": "Pooja Program",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQHpSQFgeNdFDg/feedshare-shrink_2048_1536/B56ZTa5biMHoAs-/0/1738839276362?e=1769040000&v=beta&t=MZCxom9uyWO_7LFiR3GAVPeucivcS74HjfumK7S4dkI",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    
    {
        "id": 42,
        "title": "Team members - SWPA",
        "category": "Memories",
        "imageUrl": "https://media.licdn.com/dms/image/v2/D5622AQEi4g_NA0kJDA/feedshare-shrink_2048_1536/B56ZTa5biaGQAo-/0/1738839276899?e=1769040000&v=beta&t=v8a7CPS7r4QQ66N-oFrQJyaOi8TEa0O9CjqLjyuxe5o",
        "date": "February 04, 2025",
        "description": "https://www.linkedin.com/posts/saredufy-web-plus-academy-private-limited_startupsuccess-webplusacademy-newbeginnings-ugcPost-7293220544903094272-mIoc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADspB7MB_ABXvSsmeuSFL1H1lTvFDIv7hIg",
        "aspectRatio": "landscape"
    },
    
    

]

