// ============================================================
//  SOFTWARE DATA
//  Fields:
//    name        – tool name (string)
//    description – 1-2 sentence summary (string)
//    links       – array of { label, url }
//                  Add as many as needed (multiple GitHub repos,
//                  multiple paper versions, a website, etc.) —
//                  just label each one clearly.
// ============================================================

const softwareData = [

  {
    name: "BANKSY",
    description: "Unifies cell typing and tissue domain segmentation for spatial omics data, by embedding each cell in a joint space of its own transcriptome and its local neighborhood signal.",
    links: [
      { label: "GitHub (R)", url: "https://github.com/prabhakarlab/Banksy" },
      { label: "GitHub (Python)", url: "https://github.com/prabhakarlab/Banksy_py" },
      { label: "Paper (Nature Genetics, 2024)", url: "https://www.nature.com/articles/s41588-024-01664-3" },
    ],
  },

  {
    name: "scConsensus",
    description: "Combines supervised and unsupervised clustering results to generate a consensus cell-type annotation with better cluster separation and homogeneity in scRNA-seq data.",
    links: [
      { label: "GitHub", url: "https://github.com/prabhakarlab/scConsensus" },
      { label: "Paper (BMC Bioinformatics, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/33845760/" },
    ],
  },

  {
    name: "DUBStepR",
    description: "A scalable, correlation-based feature selection method that improves accuracy in clustering single-cell data by accounting for gene-gene correlation structure.",
    links: [
      { label: "GitHub", url: "https://github.com/prabhakarlab/DUBStepR" },
      { label: "Paper (Nature Communications, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34615861/" },
    ],
  },

  {
    name: "RCA (Reference Component Analysis)",
    description: "A supervised clustering framework for robust, batch-effect-resistant cell type annotation of scRNA-seq data via reference projection.",
    links: [
      { label: "GitHub (RCA v1)", url: "https://github.com/GIS-SP-Group/RCA" },
      { label: "Paper (RCA v1 — Nature Genetics, 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28319088/" },
      { label: "GitHub (RCA v2)", url: "https://github.com/prabhakarlab/RCAv2" },
      { label: "Paper (RCA v2 — Nucleic Acids Research, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34320202/" },
    ],
  },

  {
    name: "DFilter / EFilter",
    description: "A general-purpose signal detection and estimation toolkit for ChIP-seq, DNase-seq, ATAC-seq and related next-gen sequencing assays, built on an ROC-AUC-maximizing linear filter.",
    links: [
      { label: "Website", url: "https://reggenlab.github.io/DFilter/" },
      { label: "Paper (Nature Biotechnology, 2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23770639/" },
    ],
  },

  {
    name: "TACO",
    description: "Predicts cell-type-specific transcription factor dimers by detecting overrepresented motif complexes, including overlapping motifs, in genome-wide regulatory regions.",
    links: [
      { label: "GitHub", url: "https://github.com/ajank/taco" },
      { label: "Paper (BMC Genomics, 2014)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4004051/" },
    ],
  },

];