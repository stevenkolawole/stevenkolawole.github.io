const NEWS_ITEMS = [
  `<strong>[Mar 2026]</strong> I gave a guest lecture on model compression in CMU's <a href="https://wwcohen.github.io/10718_s2026/schedule.html" target="_blank"><span style="color: rgb(10, 93, 128)">10-718: ML in Practice</span></a>. Check my slides <a href="https://docs.google.com/presentation/d/12VLlAMGHEKXrYzZC8YAQa4ncxrSlzmeL/edit?slide=id.p1#slide=id.p1" target="_blank"><span style="color: rgb(10, 93, 128)">here</span></a>.`,

  `<strong>[Dec 2025]</strong> Our paper, <a href="https://arxiv.org/abs/2509.07471" target="_blank"><span style="color: rgb(10, 93, 128)">From Scarcity to Efficiency: Investigating the Effects of Data Augmentation on African Machine Translation</span></a>, was accepted at <a href="https://lm4uc.github.io/2026/" target="_blank"><span style="color: rgb(10, 93, 128)">LM4UC@AAAI 2026</span></a> and published in Springer's CCIS series.`,

  `<strong>[Sep 2025]</strong> <a href="https://openreview.net/forum?id=1KSxxnFNb9" target="_blank"><span style="color: rgb(10, 93, 128)">PARALLELPROMPT: Extracting Parallelism from Large Language Model Queries</span></a> was accepted at NeurIPS 2025, Datasets &amp; Benchmarks Track.`,

  `<strong>[Sep 2025]</strong> <a href="https://openreview.net/forum?id=28bd6gvVO8" target="_blank"><span style="color: rgb(10, 93, 128)">Semantic Agreement Enables Efficient Open-Ended LLM Cascades</span></a> was accepted at EMNLP 2025, Industry Track.`,

  `<strong>[Jul 2025]</strong> <a href="https://openreview.net/forum?id=jn9B7LMlzk" target="_blank"><span style="color: rgb(10, 93, 128)">Agreement-Based Cascading for Efficient Inference</span></a> was accepted at TMLR.`,

  `<strong>[Jun 2025]</strong> Our preprint, <a href="https://openreview.net/forum?id=MWftALXWmL" target="_blank"><span style="color: rgb(10, 93, 128)">Training-Free Semantic Deferrals for Open-Ended LLM Cascades</span></a>, was accepted into ES-FOMO, ICML.`,

  `<strong>[Jun 2025]</strong> Our preprint, <a href="https://openreview.net/forum?id=2uMRHHzAIJ" target="_blank"><span style="color: rgb(10, 93, 128)">Privacy Isn't Free: Benchmarking the Systems Cost of Privacy-Preserving ML</span></a>, was accepted into ES-FOMO, ICML. Congrats to Emeka, Sam, Simi, and Ire (ML Collective folks)!`,

  `<strong>[Nov 2024]</strong> Our preprint, <a href="https://openreview.net/pdf?id=CZHt9kLS5S" target="_blank"><span style="color: rgb(10, 93, 128)">Extracting Parallelism from Large Language Model Queries</span></a>, was accepted into AFM, NeurIPS.`,

  `<strong>[Jun 2024]</strong> Our preprint, <a href="https://openreview.net/forum?id=SjGmChKOee" target="_blank"><span style="color: rgb(10, 93, 128)">Revisiting Cascaded Ensembles for Efficient Inference</span></a>, was accepted into ES-FOMO, ICML.`,

  `<strong>[Apr 2024]</strong> Our preprint, <a href="https://arxiv.org/abs/2404.04759" target="_blank"><span style="color: rgb(10, 93, 128)">What Happens When Small Is Made Smaller? Exploring the Impact of Compression on Small Data Pretrained Language Models</span></a>, was accepted into AfricaNLP, ICLR.`,

  `<strong>[Feb 2024]</strong> Preprint for <a href="https://arxiv.org/abs/2402.05406" target="_blank"><span style="color: rgb(10, 93, 128)">Everybody Prune Now: Structured Pruning of LLMs with only Forward Passes</span></a> is now available on arXiv.`,

  `<strong>[Sep 2023]</strong> I made my SOP public on <a href="https://cs-sop.org/" target="_blank"><span style="color: rgb(10, 93, 128)">cs-sop.org</span></a>. The platform may be useful for you if you are applying to grad school.`,

  `<strong>[Aug 2023]</strong> We are organizing <a href="https://donorbox.org/support-our-travel-to-deep-learning-indaba-2023"><span style="color: rgb(10, 93, 128)">a fundraiser</span></a> for 21 African students to attend Deep Learning Indaba. Donate here.`,

  `<strong>[Jun 2023]</strong> I anchored workshops on the topic, "HuggingFace and You", at <a href="https://indabaxng.github.io/"><span style="color: rgb(10, 93, 128)">IndabaX Nigeria</span></a> and later at <a href="https://festival.oscafrica.org/"><span style="color: rgb(10, 93, 128)">OSCAFEST</span></a>. Check my 150 slides <a href="http://tinyurl.com/oscafest-huggingface-slides"><span style="color: rgb(10, 93, 128)">here</span></a>.`,

  `<strong>[Jun 2023]</strong> Our paper preprint, <a href="https://arxiv.org/abs/2305.19365" target="_blank"><span style="color: rgb(10, 93, 128)">Vision Transformers for Mobile Applications: A Short Survey</span></a>, is available on arXiv.`,

  `<strong>[Mar 2023]</strong> I will be spending the months up till my PhD resumption as a research intern at MBZUAI, Abu Dhabi. UPDATE: Canceled. Visa denied! :(`,

  `<strong>[Mar 2023]</strong> I have fulfilled all requirments for my BSc in Computer Science program at the Federal University of Agriculture Abeokuta. I am now a BSc graduate!`,

  `<strong>[Mar 2023]</strong> Our paper, <a href="https://arxiv.org/abs/2303.16985" target="_blank"><span style="color: rgb(10, 93, 128)">Adapting to the Low-Resource Double-Bind: Investigating Low-Compute Methods on Low-Resource African Languages</span></a>, was accepted into AfricaNLP '23 - collocated with ICLR '23.`,

  `<strong>[Feb 2023]</strong> I will be resuming PhD at CMU in the fall to work on Efficient ML.`,

  `<strong>[Oct 2022]</strong> I am invited to speak at <a href="https://lanfrica.com/blog/"><span style="color: rgb(10, 93, 128)">Lanfrica Talks</span></a> in November on my sign language understanding project. Hopefully, my last talk on this topic. :)`,

  `<strong>[Oct 2022]</strong> We have finally fulfilled the terms of our grant from the <a href="https://www.algorand.foundation/"><span style="color: rgb(10, 93, 128)">Algorand Foundation</span></a>, and our project, <a href="https://nazari.ai/"><span style="color: rgb(10, 93, 128)">ASAlytics (now Nazari)</span></a>, is finally ready for UAT.`,

  `<strong>[Oct 2022]</strong> I am invited to speak on my research journey as a URM and how I have been able to build my research collaborations as an independent researcher at <a href="https://sites.google.com/view/broadening-collaboration-in-ml/home?authuser=0"><span style="color: rgb(10, 93, 128)">NeurIPS 2022 Workshop on Broadening Research Collaborations in ML</span></a>.`,

  `<strong>[Oct 2022]</strong> I gave the most hilarious talk of my life (to date) at DataFest Africa on the path to ML mastery. Check my slides <a href="https://docs.google.com/presentation/d/1tFYoyiUQC110sPXfYmMg8HT0OIasZIZC/edit?usp=sharing&ouid=111944828990443216883&rtpof=true&sd=true"><span style="color: rgb(10, 93, 128)">here</span></a>. EDIT: I am invited to present the same talk at DevFest Abeokuta in December.`,

  `<strong>[Oct 2022]</strong> <a href="https://www.linkedin.com/in/owojori-ernest-tolulope-734bb1170"><span style="color: rgb(10, 93, 128)">Ernest</span></a> talked on our project, <a href=""><span style="color: rgb(10, 93, 128)">ASAlytics (now Nazari)</span></a>, at DataFest Africa 2022 and on how folks can contribute to our open-source model. See slides <a href="https://docs.google.com/presentation/d/1eiT7GZmSmB5htK83yjRegWB3LXyJDmQd/edit?usp=sharing&ouid=111944828990443216883&rtpof=true&sd=true"><span style="color: rgb(10, 93, 128)">here</span></a>.`,

  `<strong>[Sep 2022]</strong> I will be speaking at Cohere For AI's Independent Research talk panel. EDIT: Check the video recording <a href="https://www.youtube.com/watch?v=pSctj0o7NxA"><span style="color: rgb(10, 93, 128)">here</span></a>.`,

  `<strong>[Sep 2022]</strong> I was interviewed by <a href="https://aihub.org/2022/10/12/interview-with-steven-kolawole-a-sign-to-speech-model-for-nigerian-sign-language/"><span style="color: rgb(10, 93, 128)">AIHub</span></a> on my work on sign-to-speech.`,

  `<strong>[Aug 2022]</strong> <a href="https://docs.google.com/presentation/d/1ZKBrHLDLWZAoaUMAJruMwSIf9JMIqk9pRHp78O_2CjY/edit?usp=sharing"><span style="color: rgb(10, 93, 128)">Our work</span></a> on African Sign Languages Translation is a winner of the Indaba Ideathon Challenge. Congrats, Shester and Mardiyyah!`,

  `<strong>[Aug 2022]</strong> I will be presenting my work on minimizing communication costs in decentralized federated learning using de-mutable torrents at the ML Efficiency workshop at the Indaba. See slides <a href="https://docs.google.com/presentation/d/1Yr9DGKFlkXlG5S9Rn2bXov0hjRMVlpyrSAcfta0QWpM/edit?usp=sharing"><span style="color: rgb(10, 93, 128)">here</span></a>.`,

  `<strong>[Aug 2022]</strong> I am organizing an <a href="https://mlcollective.org/"><span style="color: rgb(10, 93, 128)">ML Collective</span></a>'s family &amp; friends dinner at Deep Learning Indaba. Come join us if you are in Tunisia and you've heard of MLC before!`,

  `<strong>[Aug 2022]</strong> I will present my work on Sign to Speech in sub-Saharan Africa at the "Research in Africa" Showcase Day at Deep Learning Indaba.`,

  `<strong>[Jul 2022]</strong> <a href="https://mlcollective.org/"><span style="color: rgb(10, 93, 128)">ML Collective</span></a> is organizing <a href="https://donorbox.org/mlc-support-deep-learning-indaba"><span style="color: rgb(10, 93, 128)">a fundraiser</span></a> for 9 young African researchers to attend Deep Learning Indaba. Donate here.`,

  `<strong>[Jul 2022]</strong> I will attend this year's <a href="https://deeplearningindaba.com/2022/"><span style="color: rgb(10, 93, 128)">Deep Learning Indaba</span></a>.`,

  `<strong>[Jul 2022]</strong> Nayan and I are being interviewed by the <a href="https://www.utoronto.ca/news"><span style="color: rgb(10, 93, 128)">UofT News</span></a> on the Sign-to-Speech work.`,

  `<strong>[Jul 2022]</strong> I will be speaking at <a href="https://ep2022.europython.eu/"><span style="color: rgb(10, 93, 128)">EuroPython Dublin</span></a> on <a href="https://colinraffel.com/blog/a-call-to-build-models-like-we-build-open-source-software.html"><span style="color: rgb(10, 93, 128)">Prof. Colin Raffel's call to build models like we build OSS</span></a> and the progress made in that direction. See slides <a href="https://docs.google.com/presentation/d/1tEMgrUwnOuvW3lP6RSPLFfAPaQyFB4iJEXKOKU_RstM/edit?usp=sharing"><span style="color: rgb(10, 93, 128)">here</span></a>.`,

  `<strong>[Jun 2022]</strong> My year tenure as the Community Lead for the <a href="https://developers.google.com/community/gdsc"><span style="color: rgb(10, 93, 128)">Google Developer Students Club</span></a> on my campus is over. A huge shoutout to all my fantastic core team members!`,

  `<strong>[May 2022]</strong> I am spending two weeks in Europe and visiting <a href="https://pycon.it/en"><span style="color: rgb(10, 93, 128)">Pycon Italia</span></a> and speaking at <a href="https://2022.berlinbuzzwords.de/"><span style="color: rgb(10, 93, 128)">Berlin Buzzwords</span></a> while at it.`,

  `<strong>[Apr 2022]</strong> My <a href="https://www.ijcai.org/proceedings/2022/0855.pdf"><span style="color: rgb(10, 93, 128)">publication</span></a> on Sign Language Understanding has been accepted as a conference demo at <a href="https://ijcai-22.org/"><span style="color: rgb(10, 93, 128)">IJCAI</span></a>, AI for Social Good Track!`,

  `<strong>[Apr 2022]</strong> I will speak at <a href=""><span style="color: rgb(10, 93, 128)">PyConDE &amp; Pydata Berlin</span></a> on my sign-to-speech work. See the video recording <a href="https://www.youtube.com/watch?v=X9JwoWccpYI"><span style="color: rgb(10, 93, 128)">here</span></a>.`,

  `<strong>[Mar 2022]</strong> I won the AI Champion award at the <a href="https://www.ncs.org.ng/"><span style="color: rgb(10, 93, 128)">Nigeria Computer Society's</span></a> AI Summit held at Government House, Lafia, Nigeria, for my work on sign language understanding.`,

  `<strong>[Feb 2022]</strong> ASAlytics, our work proposal to build a real-time social media opinion-mining platform for digital assets, has been awarded a ~$115k grant by <a href="https://www.algorand.foundation/"><span style="color: rgb(10, 93, 128)">the Algorand Foundation</span></a>.`,

  `<strong>[Nov 2021]</strong> I am resuming my final session in school as a CS undergrad.`,

  `<strong>[Oct 2021]</strong> I got a full-time role with RectLabs as an AI Research Engineer.`,

  `<strong>[Oct 2021]</strong> My work on Sign-to-Speech for sub-Saharan Africa has been accepted at <a href="https://ml4d.notion.site/Machine-Learning-for-the-Developing-World-ML4D-2021-548251eab3df4517819c4742c2e5c853"><span style="color: rgb(10, 93, 128)">the NeurIPS workshop on ML for the Developing World</span></a>.`,

  `<strong>[Oct 2021]</strong> I am leaving my community role as the Campus Lead for AI+ FUNAAB as I resume the Community Lead role for my school's Google Developer Student Club.`,

  `<strong>[Oct 2021]</strong> My work on sign language understanding won the 2nd Best Poster Award at <a href="https://www.datasciencenigeria.org/2021-bootcamp/"><span style="color: rgb(10, 93, 128)">Data Science Nigeria's AI Bootcamp</span></a>.`,

  `<strong>[Oct 2021]</strong> My research internship with <a href="https://www.seqhubanalytics.com/"><span style="color: rgb(10, 93, 128)">SeqHub Analytics LLC</span></a> is finally over.`,

  `<strong>[Jul 2021]</strong> My work on sign-to-speech for real-time usage won <a href="https://www.deepquestai.com/"><span style="color: rgb(10, 93, 128)">DeepQuest's</span></a> AI Challenge.`,

  `<strong>[Jan 2021]</strong> I am leaving my community outreach role as the AI+ City Lead for AI+ Abeokuta.`,

  `<strong>[Nov 2020]</strong> AI+ Abeokuta won the <a href="https://twitter.com/dsn_ai_network/status/1328669596216389632"><span style="color: rgb(10, 93, 128)">"AI City of the Year" award;</span></a> and I was the 1st runner-up to the <a href="https://twitter.com/dsn_ai_network/status/1327195508805423104"><span style="color: rgb(10, 93, 128)">Mr. Algorithm award</span></a> at <a href="https://www.datasciencenigeria.org/2020-bootcamp/"><span style="color: rgb(10, 93, 128)">the DSN AI Bootcamp 2020</span></a>.`,

  `<strong>[Aug 2020]</strong> I am speaking at PyCon Africa 2020 on the using Streamlit to build data apps.`,

  `<strong>[Feb 2020]</strong> I was one of the 7 finalists at the <a href="https://stevenkolawole.medium.com/can-you-hack-the-future-ideathon-how-we-made-it-to-the-finals-and-lost-a15d932a5bb7"><span style="color: rgb(10, 93, 128)">MaxNg X SeqHub's Ideathon</span></a> for my work on HotUsers, a recommender system with geospatial data to predict hot zones for bikesharing riders in Lagos. Top 7 / 40 odd teams.`,

  `<strong>[Dec 2019]</strong> I won <a href="https://stevenkolawole.medium.com/how-i-won-a-gold-medal-at-naijahacks-19-fdf865126abb/"><span style="color: rgb(10, 93, 128)">a gold medal at NaijaHacks 2019</span></a> for my work on AgroAI, a mobile app that helps farmers detect plant diseases offline, using computer vision. Top 12 / 336 teams.`,
];

function renderNews(containerId, limit) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}
