// ============================================================
//  DATASETS & PROTOCOLS DATA
//
//  Both datasetsData and protocolsData are grouped and rendered
//  by "project". To add a new data freeze or protocol to an
//  existing project (e.g. AIDA), just add a new entry into that
//  project's array below. To start a brand-new project section,
//  add a new object with a new "project" name — it will
//  automatically render as its own group, no HTML edits needed.
// ============================================================


// ── DATASETS ─────────────────────────────────────────────────
// Each project has an optional intro (general resource pointer,
// e.g. a portal recommendation) and a list of "freezes" (or
// releases/versions). Each freeze has a name, description,
// citation note, and a resources table.
//
// Each resource row: { resource, note (optional), links: [{label, url}] }

const datasetsData = [
    {
        project: "AIDA",
        intro: "We recommend our AIDA Phase 1 visualisations at the Chan Zuckerberg (CZ) CELLxGENE data portal as a starting point for exploring AIDA resources.",
        introLink: "https://cellxgene.cziscience.com/collections/ced320a1-29f3-47c1-a735-513c7084d508",
        freezes: [
            {
                name: "AIDA Phase 1 Data Freeze v1",
                description: "The AIDA Phase 1 Data Freeze v1 object comprises 1,058,909 peripheral blood mononuclear cells (PBMCs) from 503 healthy donors from Japan, Singapore, and South Korea alongside 5 common controls. This first AIDA data freeze was released to the research community pre-publication (including via the Human Cell Atlas (HCA) Data Portal, and CZ CELLxGENE), and was also part of the first CZ CELLxGENE Census assembled in May 2023.",
                citation: "Please cite Kock et al., Cell, 2025 if you use/analyse any of these datasets. For X chromosome inactivation escape analyses, please also cite Tomofuji et al., Cell Genomics, 2024. For splicing analyses, please also cite Tian et al., Nature Genetics, 2024.",
                resources: [
                    {
                        resource: "Gene-cell matrix and metadata",
                        links: [{ label: "CZ CELLxGENE", url: "https://cellxgene.cziscience.com/collections/ced320a1-29f3-47c1-a735-513c7084d508" }]
                    },
                    {
                        resource: "Pre-processing and data analysis code",
                        links: [
                            { label: "GitHub", url: "https://github.com/prabhakarlab/AIDA_Phase1/" },
                            { label: "Zenodo", url: "https://doi.org/10.5281/zenodo.14722571" }
                        ]
                    },
                    {
                        resource: "Japan 10x 5' v2 gene expression FASTQ files",
                        links: [{ label: "HCA Data Portal (open access)", url: "https://data.humancellatlas.org/explore/projects/f0f89c14-7460-4bab-9d42-22228a91f185" }]
                    },
                    {
                        resource: "Singapore 10x 5' v2 gene expression FASTQ files",
                        note: "Not publicly available due to data privacy regulations.",
                        links: [{ label: "Request via HELIOS DAC", url: "mailto:helios_science@ntu.edu.sg" }]
                    },
                    {
                        resource: "South Korea 10x 5' v2 gene expression FASTQ files",
                        links: [{ label: "HCA Data Portal (open access)", url: "https://data.humancellatlas.org/explore/projects/f0f89c14-7460-4bab-9d42-22228a91f185" }]
                    }
                ]
            },
            {
                name: "AIDA Phase 1 Data Freeze v2",
                description: "The AIDA Phase 1 Data Freeze v2 object comprises 1,265,624 PBMCs from 619 donors, spanning 7 population groups across 5 Asian countries (India, Japan, Singapore, South Korea, and Thailand), and 6 common controls. Going from Data Freeze v1 to Data Freeze v2, additional healthy Asian donor samples and control samples were added, 5 Asian donors with ambiguous medication data were excluded, 121 new Asian donors were added, and two libraries with high doublet rates were removed. This second AIDA data freeze was also released to the research community pre-publication. See Kock et al., Cell, 2025 for full details.",
                citation: "Please cite Kock et al., Cell, 2025 if you use/analyse any of these datasets. For X chromosome inactivation escape analyses, please also cite Tomofuji et al., Cell Genomics, 2024. For splicing analyses, please also cite Tian et al., Nature Genetics, 2024.",
                resources: [
                    {
                        resource: "Gene-cell matrix and metadata",
                        links: [{ label: "CZ CELLxGENE", url: "https://cellxgene.cziscience.com/collections/ced320a1-29f3-47c1-a735-513c7084d508" }]
                    },
                    {
                        resource: "Cell annotation metadata",
                        links: [{ label: "Cell Annotation Platform", url: "https://celltype.info/project/336/dataset/591" }]
                    },
                    {
                        resource: "Pre-processing and data analysis code",
                        links: [
                            { label: "GitHub", url: "https://github.com/prabhakarlab/AIDA_Phase1/" },
                            { label: "Zenodo", url: "https://doi.org/10.5281/zenodo.14722571" }
                        ]
                    },
                    {
                        resource: "India 10x 5' v2 gene expression FASTQ files",
                        links: [{ label: "HCA Data Portal (open access)", url: "https://data.humancellatlas.org/explore/projects/f0f89c14-7460-4bab-9d42-22228a91f185" }]
                    },
                    {
                        resource: "Japan 10x 5' v2 FASTQ files & Illumina GSAv3 genotype data",
                        links: [{ label: "HCA Data Portal (managed access)", url: "https://explore.data.humancellatlas.org/projects/35d5b057-3daf-4ccd-8112-196194598893" }]
                    },
                    {
                        resource: "Singapore 10x 5' v2 FASTQ files & Illumina GSAv3 genotype data",
                        note: "Not publicly available due to data privacy regulations.",
                        links: [{ label: "Request via HELIOS DAC", url: "mailto:helios_science@ntu.edu.sg" }]
                    },
                    {
                        resource: "South Korea 10x 5' v2 FASTQ files & Illumina GSAv3 genotype data",
                        note: "Transiting to HCA Managed Access.",
                        links: [{ label: "HCA Data Portal", url: "https://data.humancellatlas.org/hca-bio-networks/genetic-diversity/datasets" }]
                    },
                    {
                        resource: "Thailand 10x 5' v2 gene expression FASTQ files",
                        note: "Transiting to HCA Managed Access.",
                        links: [{ label: "HCA Data Portal", url: "https://data.humancellatlas.org/hca-bio-networks/genetic-diversity/datasets" }]
                    }
                ]
            }
        ]
    }
];


// ── PROTOCOLS ────────────────────────────────────────────────
// Each entry: { project, title, description, link }

const protocolsData = [
    {
        project: "AIDA",
        title: "PBMC Isolation from CPT Tube",
        description: "Our PBMC isolation protocol.",
        link: "https://www.protocols.io/view/pbmcs-isolation-from-cpt-tube-b8r9rv96"
    },
    {
        project: "AIDA",
        title: "Demuxlet Cell Preparation Protocol",
        description: "Our sample multiplexing and cell preparation protocol.",
        link: "https://www.protocols.io/view/demuxlet-cell-preparation-protocol-b8sdrwa6"
    }
];