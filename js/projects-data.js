// ============================================================
//  PROJECTS DATA
//  To add a project: copy one entry block and fill in the fields.
//  Fields:
//    title       – project name (string)
//    description – one-line summary shown on the landing page card (string)
//    thumbnail   – path to card image, relative to projects/projects.html
//                  e.g. "../images/projects/tishumap.jpg"
//                  set to null to show a placeholder
//    page        – filename of the sub-item page, e.g. "tishumap.html"
// ============================================================

const projectsData = [
    {
        title: "TISHUMAP",
        description: "Spatial mapping of tissue architecture at single-cell resolution.",
        thumbnail: "../images/projects-and-resources/tishumap.png",
        page: "tishumap.html"
    },
    {
        title: "AIDA",
        description: "A multi-national single-cell reference atlas of Asian immune cell diversity.",
        thumbnail: "../images/projects-and-resources/aida.png",
        page: "aida.html"
    },
    {
        title: "PRADICT",
        description: "Understanding somatic mutations in blood stem cells and their role in disease.",
        thumbnail: "../images/projects-and-resources/pradict.jpg",
        page: "pradict.html"
    },
    {
        title: "AI Models: Building Virtual Cells and Tissues",
        description: "Integrating multi-omics data to computationally model human cell behaviour.",
        thumbnail: "../images/projects-and-resources/virtual_cell.jpg",
        page: "ai-models.html"
    }
];