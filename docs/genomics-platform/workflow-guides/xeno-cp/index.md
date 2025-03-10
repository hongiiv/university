---
title: XenoCP
---

|                       |                                            |
| --------------------- | ------------------------------------------ |
| **Authors**           | John Doe                                   |
| **Publication**       | N/A (not published)                        |
| **Technical Support** | [Contact Us](https://stjude.cloud/contact) |

## Overview

*abstract-type description of tool*

## Inputs

*table of inputs; example below*

| Name                                           | Type       | Description                                                                      | Example                                   |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------- | ----------------------------------------- |
| FastQ files (*required* if using FastQ inputs) | Input file | Gzipped FastQ files generated by experiment.                                     | Sample_R1.fastq.gz and Sample_R2.fastq.gz |
| BAM files (*required* if using BAM inputs)     | Input file | BAM files aligned against hg19/hg38 (WGS, WES or RNA-Seq).                       | Sample.bam                                |
| BAM indices (*required* if using BAM inputs)   | Input file | Corresponding BAM index of the BAM files above.                                  | Sample.bam.bai                            |
| Mutation file (*required*)                     | Input file | File describing the mutations present in the sample (special format, see below). | *.txt (tab-delimited)                     |
| SNV or fusion                                  | Parameter  | Specify the mutation file contains SNV or gene fusion.                           | SNV                                       |
| Peptide size                                   | Parameter  | Size of the peptide.                                                             | 9                                         |
| Affinity threshold                             | Parameter  | Affinity cutoff for epitope prediction report.                                   | 500                                       |

### Input file configuration

*if needed*

## Outputs

*table of outputs; example below*

| Name                               | Description                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| Epitope affinity prediction (html) | Epitope affinity. The peptide with affinity &lt; cutoff will be highlighted. |
| Epitope affinity prediction (xlsx) | Excel tables for the information of all epitopes                             |
| Affinity (raw output)              | Epitope affinity                                                             |
| Peptide sequence (raw output)      | Peptide sequences in Fasta format                                            |

## Workflow Steps

*description of algorithm(s) or workflow steps*


## Additional Info

*description of any additional information that the user might need to know/do before running the workflow*


## Creating a workspace
Before you can run one of our workflows, you must first create a workspace in DNAnexus for the run. Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#getting-started) to learn how to create a DNAnexus workspace for each workflow run.

You can navigate to the **workflow name** workflow page [here]().

## Uploading Input files

*note any additional information the user should know about what input files are required* 

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#uploading-files) to learn how to upload input files to the workspace you just created.

## Running the Workflow

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#running-the-workflow) to learn how to launch the workflow, hook up input files, adjust parameters, start a run, and monitor run progress.

*!!!warning
any cautionary notes specific to running this workflow*
!!!


## Analysis of Results
Each tool in St. Jude Cloud produces a visualization that makes understanding results more accessible than working with excel spreadsheet or tab delimited files. This is the primary way we recommend you work with your results. 

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#custom-visualizations) to learn how to access these visualizations.

We also include the raw output files for you to dig into if the visualization is not sufficient to answer your research question.

Refer to [the general workflow guide](../../analyzing-data/running-sj-workflows/#raw-results-files) to learn how to access raw results files.

### Interpreting results

*detailed explanations with helpful screenshots or gifs*


## Frequently asked questions

*faqs* 

If you have any questions not covered here, feel free to reach
out on [our contact form](https://hospital.stjude.org/apps/forms/fb/st-jude-cloud-contact/).

## Similar Topics

[Running our Workflows](../../analyzing-data/running-sj-workflows)  
[Working with our Data Overview](../../managing-data/working-with-our-data)   
[Upload/Download Data (local)](../../managing-data/upload-local)  
