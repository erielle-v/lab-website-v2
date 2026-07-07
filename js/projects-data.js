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
        thumbnail: "../images/projects-and-resources/tishumap.jpg",
        page: "tishumap.html"
    },
    {
        title: "AIDA",
        description: "A multi-national single-cell reference atlas of Asian immune cell diversity.",
        thumbnail: "../images/projects-and-resources/aida.jpg",
        page: "aida.html"
    },
    {
        title: "Clonal Haematopoiesis",
        description: "Understanding somatic mutations in blood stem cells and their role in disease.",
        thumbnail: "../images/projects-and-resources/clonal_haematopoiesis.jpg",
        page: "clonal-haematopoiesis.html"
    },
    {
        title: "Building a Virtual Cell",
        description: "Integrating multi-omics data to computationally model human cell behaviour.",
        thumbnail: "../images/projects-and-resources/virtual_cell.jpg",
        page: "virtual-cell.html"
    },
    {
        title: "Human Cell Atlas",
        description: "Contributing single-cell genomics data to a global map of all human cell types.",
        thumbnail: "../images/projects-and-resources/hca.jpg",
        page: "human-cell-atlas.html"
    },
];