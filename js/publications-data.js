// ============================================================
//  PUBLICATIONS DATA
//  Fields:
//    title   – full paper title (string)
//    authors – shortened: "First A, ..., Prabhakar S" or "First A et al."
//    journal – journal name
//    year    – publication year (number)
//    link    – PubMed, DOI, or bioRxiv URL (string, or null)
//    summary – 2-3 sentence summary from abstract
// ============================================================

const publicationsData = [

    // ── 2025 ──────────────────────────────────────────────────
    {
        year: 2025,
        title: "Asian Diversity in Human Immune Cells",
        authors: "Kock KH, Tan LM, ..., Prabhakar S",
        journal: "Cell",
        link: "https://www.cell.com/cell/fulltext/S0092-8674%2825%2900202-8",
        summary: "The relationships of human diversity with biomedical phenotypes are pervasive yet remain understudied, particularly in a single-cell genomics context. Here, we present the Asian Immune Diversity Atlas (AIDA), a multi-national single-cell RNA sequencing (scRNA-seq) healthy reference atlas of human immune cells. AIDA enables analyses of multi-ancestry disease datasets and facilitates the development of precision medicine efforts in Asia and beyond."
    },

    // ── 2024 ──────────────────────────────────────────────────
    {
        year: 2024,
        title: "BANKSY Unifies Cell Typing and Tissue Domain Segmentation for Scalable Spatial Omics Data Analysis",
        authors: "Singhal V, Chou N, ..., Prabhakar S",
        journal: "Nature Genetics",
        link: "https://www.nature.com/articles/s41588-024-01664-3",
        summary: "Spatial omics data are clustered to define both cell types and tissue domains. We present Building Aggregates with a Neighborhood Kernel and Spatial Yardstick (BANKSY), an algorithm that unifies these two spatial clustering problems by embedding cells in a product space of their own and the local neighborhood transcriptome, representing cell state and microenvironment, respectively. In summary, BANKSY provides an accurate, biologically motivated, scalable and versatile framework for analyzing spatially resolved omics data."
    },

    // ── 2023 ──────────────────────────────────────────────────
    {
        year: 2023,
        title: "A Single-cell Atlas Identifies Pretreatment Features of Primary Imatinib Resistance in Chronic Myeloid Leukemia",
        authors: "Krishnan V, Schmidt F, ..., Prabhakar S",
        journal: "Blood",
        link: "https://pubmed.ncbi.nlm.nih.gov/36857629/",
        summary: "Primary resistance to tyrosine kinase inhibitors (TKIs) is a significant barrier in chronic myeloid leukemia (CML), but the factors driving response heterogeneity remain unclear. Using single-cell RNA sequencing of pretreatment bone marrow, the authors identified eight statistically significant features correlated with imatinib sensitivity or resistance, and applied machine learning to predict response with over 80% accuracy. A canonical erythroid-specifying regulon in leukemic stem cells emerged as a hallmark of patients who achieved major molecular remission."
    },

    // ── 2022 ──────────────────────────────────────────────────
    {
        year: 2022,
        title: "Integrative Multi-omics Landscape of Fluoxetine Action Across 27 Brain Regions Reveals Global Increase in Energy Metabolism and Region-specific Chromatin Remodelling",
        authors: "Rayan NA, Kumar V, ..., Prabhakar S",
        journal: "Molecular Psychiatry",
        link: "https://doi.org/10.1038/s41380-022-01725-1",
        summary: "Despite SSRIs being prescribed over 200 million times annually, the molecular mechanisms of fluoxetine remain incompletely understood. This study performs multimodal omics profiling across 27 brain regions in mice, revealing profound region-specific shifts in gene expression and chromatin state, with consistent upregulation of oxidative phosphorylation and mitochondrial pathways across the brain. Single-cell analysis further uncovered stark differences in fluoxetine response between dorsal and ventral hippocampal dentate gyri, highlighting novel candidate cell types and regulatory elements for depression and anxiety."
    },
    {
        year: 2022,
        title: "Single-cell and Bulk Transcriptome Sequencing Identifies Two Epithelial Tumor Cell States and Refines the Consensus Molecular Classification of Colorectal Cancer",
        authors: "Joanito I, Wirapati P, ..., Prabhakar S",
        journal: "Nature Genetics",
        link: "https://www.nature.com/articles/s41588-022-01100-4",
        summary: "The consensus molecular subtype (CMS) classification of colorectal cancer is based on bulk transcriptomics. The underlying epithelial cell diversity remains unclear. We analyzed 373,058 single-cell transcriptomes from 63 patients, focusing on 49,155 epithelial cells. We defined the intrinsic epithelial axis of colorectal cancer and propose a refined 'IMF' classification with five subtypes, combining intrinsic epithelial subtype (I), microsatellite instability status (M) and fibrosis (F)."
    },
    {
        year: 2022,
        title: "Histone Acetylome-wide Associations in Immune Cells from Individuals with Active Mycobacterium tuberculosis Infection",
        authors: "Del Rosario RCH, Poschmann J, ..., Prabhakar S",
        journal: "Nature Microbiology",
        link: "https://pubmed.ncbi.nlm.nih.gov/35102304/",
        summary: "Host chromatin changes are thought to play an important role in the pathogenesis of tuberculosis, but a systematic epigenomic study had not been performed. This study describes the first histone acetylome-wide association study (HAWAS) of an infectious disease, profiling H3K27 acetylation in granulocytes and monocytes from active TB patients and controls across three independent cohorts. More than 2,000 differentially acetylated loci were identified, enriched near potassium channel genes including KCNJ15, which was shown to modulate apoptosis and promote bacterial clearance in vitro."
    },

    // ── 2021 ──────────────────────────────────────────────────
    {
        year: 2021,
        title: "DUBStepR is a Scalable Correlation-based Feature Selection Method for Accurately Clustering Single-cell Data",
        authors: "Ranjan B, Sun W, ..., Prabhakar S",
        journal: "Nature Communications",
        link: "https://pubmed.ncbi.nlm.nih.gov/34615861/",
        summary: "Feature selection is a key step in single-cell clustering pipelines, yet existing methods perform inconsistently and ignore gene–gene correlations. DUBStepR (Determining the Underlying Basis using Stepwise Regression) leverages these correlations with a novel inhomogeneity measure called the Density Index to select a compact, biologically informative gene set. Despite selecting fewer genes than competing methods, DUBStepR substantially outperformed them across diverse clustering benchmarks, including robust deconvolution of T and NK cell heterogeneity in disease cohorts."
    },
    {
        year: 2021,
        title: "RCA2: a Scalable Supervised Clustering Algorithm that Reduces Batch Effects in scRNA-seq Data",
        authors: "Schmidt F, Ranjan B, ..., Prabhakar S",
        journal: "Nucleic Acids Research",
        link: "https://pubmed.ncbi.nlm.nih.gov/34320202/",
        summary: "Unsupervised clustering of single-cell transcriptomes is prone to grouping cells by technical rather than biological variation. RCA2 is the first algorithm to combine reference projection — which provides batch effect robustness — with scalable graph-based clustering, along with a user-friendly framework for downstream analysis. The authors demonstrate its advantages on bone marrow, healthy PBMC, and COVID-19 PBMC datasets, showing that supervised clustering substantially outperforms standard unsupervised approaches."
    },

    // ── 2020 ──────────────────────────────────────────────────
    {
        year: 2020,
        title: "Lineage-dependent Gene Expression Programs Influence the Immune Landscape of Colorectal Cancer",
        authors: "Lee HO, Hong Y, ..., Prabhakar S",
        journal: "Nature Genetics",
        link: "https://pubmed.ncbi.nlm.nih.gov/32451460/",
        summary: "Immunotherapy for metastatic colorectal cancer (CRC) is effective only for a subset of tumors, suggesting that cancer cells themselves shape their immune microenvironment. Profiling 91,103 single-cell transcriptomes from 29 patients, the authors show that cancer cells display transcriptional features of normal differentiation programs, and that specific genetic alterations foster immunosuppressive microenvironments driven by regulatory T cells, myofibroblasts and myeloid cells. Intercellular network reconstruction provides mechanistic insight for designing more effective immuno-oncology strategies."
    },
    {
        year: 2020,
        title: "Early Fate Defines Microglia and Non-parenchymal Brain Macrophage Development",
        authors: "Utz SG, See P, ..., Prabhakar S",
        journal: "Cell",
        link: "https://pubmed.ncbi.nlm.nih.gov/32259484/",
        summary: "Central nervous system macrophages include microglia and border-associated macrophages (BAMs) in the meninges, choroid plexus and perivascular spaces, but whether they share a developmental program was unknown. Two phenotypically and transcriptionally distinct macrophage populations were identified as early as the yolk sac stage, with BAMs largely deriving from early erythro-myeloid progenitors. Microglia development was found to depend on TGF-β signalling, while BAM genesis occurred independently, establishing them as separate lineages from the earliest stages."
    },

    // ── 2019 ──────────────────────────────────────────────────
    {
        year: 2019,
        title: "Large-Scale Whole-Genome Sequencing of Three Diverse Asian Populations in Singapore",
        authors: "Wu D, Dou J, ..., Prabhakar S",
        journal: "Cell",
        link: "https://pubmed.ncbi.nlm.nih.gov/31626772/",
        summary: "Underrepresentation of Asian populations in genomic databases limits the applicability of precision medicine across the globe. This study presents whole-genome sequencing data from 4,810 individuals of Chinese, Malay and Indian ancestry in Singapore, uncovering millions of novel variants and capturing unique population-specific genetic architecture. The resulting SG10K dataset provides a crucial reference resource for disease association studies and population genomics in Asian cohorts."
    },
    {
        year: 2019,
        title: "Robust CTCF-Based Chromatin Architecture Underpins Epigenetic Changes in the Heart Failure Stress-Gene Response",
        authors: "Lee DP, Tan WLW, ..., Prabhakar S",
        journal: "Circulation",
        link: "https://pubmed.ncbi.nlm.nih.gov/30717603/",
        summary: "Heart failure involves extensive transcriptional reprogramming, but the role of three-dimensional chromatin architecture in this process was not well understood. The authors show that CTCF-anchored topological domains remain largely stable during the cardiac stress response, providing a structural scaffold on which dynamic enhancer–promoter interactions drive stress-gene activation. This finding establishes robust chromatin architecture as a key organising principle underlying epigenetic changes in failing hearts."
    },
    {
        year: 2019,
        title: "Concurrent Single-Cell RNA and Targeted DNA Sequencing on an Automated Platform for Comeasurement of Genomic and Transcriptomic Signatures",
        authors: "Kong SL, Li H, ..., Prabhakar S",
        journal: "Clinical Chemistry",
        link: "https://pubmed.ncbi.nlm.nih.gov/30523199/",
        summary: "Simultaneous measurement of genomic and transcriptomic information from the same single cell provides richer insight into cancer biology than either modality alone. This study presents an automated microfluidic platform enabling concurrent single-cell RNA and targeted DNA sequencing, validated on cancer cell lines and clinical tumour samples. The approach allows direct correlation of somatic mutations with gene expression states within individual cells, opening new avenues for studying intratumoural heterogeneity."
    },

    // ── 2018 ──────────────────────────────────────────────────
    {
        year: 2018,
        title: "DNA-mediated Dimerization on a Compact Sequence Signature Controls Enhancer Engagement and Regulation by FOXA1",
        authors: "Wang X, Srivastava Y, ..., Prabhakar S",
        journal: "Nucleic Acids Research",
        link: "https://pubmed.ncbi.nlm.nih.gov/29669022/",
        summary: "FOXA1 is a pioneer transcription factor with widespread roles in development and cancer, but the structural basis of its DNA binding had not been fully characterised. The authors identify a compact sequence signature that mediates FOXA1 dimerisation on DNA, and show this mode of binding is required for enhancer engagement and target gene regulation. These findings reveal a previously unrecognised mechanism by which FOXA1 controls gene expression programs in hormone-driven cancers."
    },

    // ── 2017 ──────────────────────────────────────────────────
    {
        year: 2017,
        title: "Reference Component Analysis of Single-cell Transcriptomes Elucidates Cellular Heterogeneity in Human Colorectal Tumors",
        authors: "Li H, Courtois ET, ..., Prabhakar S",
        journal: "Nature Genetics",
        link: "https://pubmed.ncbi.nlm.nih.gov/28319088/",
        summary: "Intratumoral heterogeneity is a major obstacle to cancer treatment and a significant confounding factor in bulk tumour profiling. The authors performed unbiased single-cell RNA-seq on 11 primary colorectal tumours and matched normal mucosa, developing reference component analysis (RCA) to robustly cluster transcriptomes. Their analyses identified two subtypes of cancer-associated fibroblasts and further divided tumours into subgroups with divergent survival probabilities."
    },

    // ── 2016 ──────────────────────────────────────────────────
    {
        year: 2016,
        title: "Histone Acetylome-wide Association Study of Autism Spectrum Disorder",
        authors: "Sun W, Poschmann J, ..., Prabhakar S",
        journal: "Cell",
        link: "https://pubmed.ncbi.nlm.nih.gov/27863250/",
        summary: "The relationship between histone modification changes and autism spectrum disorder (ASD) had not been systematically examined at genome scale. Performing H3K27ac ChIP-seq on 257 postmortem brain samples, the authors found that despite the etiological heterogeneity of ASD, at least 68% of cases shared a common acetylome signature at over 5,000 cis-regulatory elements in prefrontal and temporal cortex. These epigenetic aberrations highlighted genes involved in synaptic transmission, ion transport and immune function, and were not explained by genetic differentiation at cis-SNPs."
    },
    {
        year: 2016,
        title: "Romulus: Robust Multi-state Identification of Transcription Factor Binding Sites from DNase-seq Data",
        authors: "Jankowski A, Tiuryn J, Prabhakar S",
        journal: "Bioinformatics",
        link: "https://pubmed.ncbi.nlm.nih.gov/27153645/",
        summary: "Identifying transcription factor binding sites from DNase-seq data is complicated by the existence of multiple functional binding states with distinct footprint signatures. Romulus addresses this by jointly modelling DNase cleavage patterns and binding occupancy across multiple states using a probabilistic framework. Benchmarking across diverse datasets showed improved sensitivity and specificity over existing footprinting methods."
    },
    {
        year: 2016,
        title: "Comprehensive Benchmarking Reveals H2BK20 Acetylation as a Distinctive Signature of Cell-state-specific Enhancers and Promoters",
        authors: "Kumar V, Rayan NA, ..., Prabhakar S",
        journal: "Genome Research",
        link: "https://pubmed.ncbi.nlm.nih.gov/26957309/",
        summary: "Histone modifications are widely used to annotate regulatory elements, but the relative informativeness of different marks for enhancer and promoter identification had not been comprehensively compared. Through systematic benchmarking, H2BK20 acetylation emerged as a highly distinctive signature of cell-state-specific enhancers and promoters, outperforming many commonly used marks. These results suggest that H2BK20ac should be prioritised in epigenomic profiling studies aimed at characterising dynamic regulatory elements."
    },

    // ── 2015 ──────────────────────────────────────────────────
    {
        year: 2015,
        title: "Non-canonical NF-κB Signalling and ETS1/2 Cooperatively Drive C250T Mutant TERT Promoter Activation",
        authors: "Li Y, Zhou QL, ..., Prabhakar S",
        journal: "Nature Cell Biology",
        link: "https://pubmed.ncbi.nlm.nih.gov/26389665/",
        summary: "Hotspot mutations in the TERT promoter are among the most common non-coding mutations in cancer, yet the mechanism by which they activate telomerase expression was unclear. The authors show that the C250T mutation creates a binding site cooperatively engaged by ETS1/2 transcription factors and non-canonical NF-κB signalling, together driving aberrant TERT transcription. This mechanism links two major cancer signalling pathways to telomerase reactivation, with implications for targeted therapy."
    },
    {
        year: 2015,
        title: "Sensitive Detection of Chromatin-altering Polymorphisms Reveals Autoimmune Disease Mechanisms",
        authors: "del Rosario RC, Poschmann J, ..., Prabhakar S",
        journal: "Nature Methods",
        link: "https://pubmed.ncbi.nlm.nih.gov/25799442/",
        summary: "Many disease-associated variants from GWAS studies lie in non-coding regions, but detecting their functional effects on chromatin has been technically challenging. The authors develop a sensitive method for identifying chromatin-altering polymorphisms, and apply it to reveal mechanistic links between non-coding autoimmune variants and disrupted gene regulatory elements. The approach provides a broadly applicable framework for connecting GWAS loci to functional epigenomic changes in disease-relevant cell types."
    },

    // ── 2014 ──────────────────────────────────────────────────
    {
        year: 2014,
        title: "Noncoding Origins of Anthropoid Traits and a New Null Model of Transposon Functionalization",
        authors: "del Rosario RC, Rayan NA, Prabhakar S",
        journal: "Genome Research",
        link: "https://pubmed.ncbi.nlm.nih.gov/25043600/",
        summary: "The genetic basis of traits distinguishing anthropoid primates from other mammals remains poorly understood, particularly for traits with no obvious protein-coding explanation. The authors systematically identify non-coding regulatory elements that underwent accelerated evolution in the anthropoid lineage, linking them to morphological and neurological traits through nearby gene associations. They also propose a new null model for transposon functionalization that better accounts for the evolutionary dynamics of repetitive elements co-opted as cis-regulatory sequences."
    },
    {
        year: 2014,
        title: "Efficient Endoderm Induction from Human Pluripotent Stem Cells by Logically Directing Signals Controlling Lineage Bifurcations",
        authors: "Loh KM, Ang LT, ..., Prabhakar S",
        journal: "Cell Stem Cell",
        link: "https://pubmed.ncbi.nlm.nih.gov/24412311/",
        summary: "Directing human pluripotent stem cells into definitive endoderm efficiently and cleanly has been limited by incomplete understanding of the signalling logic governing lineage decisions. By systematically mapping how competing signals control key lineage bifurcations, the authors developed a step-wise induction protocol that generates highly pure endoderm populations. This strategy provides a principled framework for deriving other cell types by logically navigating developmental decision points."
    },

    // ── 2013 ──────────────────────────────────────────────────
    {
        year: 2013,
        title: "Comprehensive Prediction in 78 Human Cell Lines Reveals Rigidity and Compactness of Transcription Factor Dimers",
        authors: "Jankowski A, Szczurek E, ..., Prabhakar S",
        journal: "Genome Research",
        link: "https://pubmed.ncbi.nlm.nih.gov/23554463/",
        summary: "Transcription factors often bind DNA as dimers, but the structural constraints governing dimerisation across the human genome had not been systematically characterised. Analysing binding data across 78 cell lines, the authors show that TF dimers exhibit striking rigidity and compactness in their spacing and orientation preferences. These constraints reflect underlying structural features of TF protein–DNA complexes and have important implications for predicting cooperative binding and regulatory element function."
    },
    {
        year: 2013,
        title: "Uniform, Optimal Signal Processing of Mapped Deep-sequencing Data",
        authors: "Kumar V, Muratani M, ..., Prabhakar S",
        journal: "Nature Biotechnology",
        link: "https://pubmed.ncbi.nlm.nih.gov/23770639/",
        summary: "A lack of standardised signal processing for deep-sequencing data creates inconsistencies that hinder comparisons across studies and experimental platforms. The authors present a uniform, statistically optimal framework for processing mapped sequencing data, applicable to ChIP-seq, DNase-seq and related assays. The approach substantially improves peak calling accuracy and reproducibility, providing a principled foundation for large-scale epigenomics analysis."
    },
    {
        year: 2013,
        title: "TherMos: Estimating Protein-DNA Binding Energies from In Vivo Binding Profiles",
        authors: "Sun W, Hu X, ..., Prabhakar S",
        journal: "Nucleic Acids Research",
        link: "https://pubmed.ncbi.nlm.nih.gov/23595148/",
        summary: "Quantifying the binding energies of transcription factors to their genomic targets is essential for understanding gene regulation, but existing methods rely heavily on in vitro data that may not reflect in vivo conditions. TherMos estimates protein–DNA binding energies directly from in vivo binding profiles using a thermodynamic model, accounting for competition and cooperativity. The method provides more accurate predictions of binding occupancy across genomic contexts than affinity-based approaches alone."
    },

];