// ============================================================
//  RESOURCES DATA
//  To add a resource: copy one entry block and fill in the fields.
//  Fields:
//    title       – resource name (string)
//    description – one-line summary shown on the landing page card (string)
//    thumbnail   – path to card image, relative to resources/resources.html
//                  e.g. "../images/resources/software.jpg"
//                  set to null to show a placeholder
//    page        – filename of the sub-item page, e.g. "software.html"
// ============================================================

const resourcesData = [
    {
        title: "Algos",
        description: "Open-source computational tools developed by the lab for single-cell and spatial omics analysis.",
        thumbnail: "../images/projects-and-resources/algos.jpg",
        page: "algos.html"
    },
    {
        title: "S2GP Platform",
        description: "The Spatial and Single-Cell Genomics Platform at GIS, offering cutting-edge sequencing services.",
        thumbnail: "../images/projects-and-resources/s2gp.jpg",
        page: "s2gp-platform.html"
    },
    {
        title: "Datasets & Protocols",
        description: "Publicly available datasets alongside the experimental protocols used and developed by the lab.",
        thumbnail: "../images/projects-and-resources/datasets_and_protocols.jpg",
        page: "datasets-protocols.html"
    },
];