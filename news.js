const NEWS_ITEMS = [
  `<strong>[Jul 2026]</strong> We're organizing, with support from Intron and Adaption Labs, an <a href="https://ml-collective-africa.github.io/dl-indaba-2026/workshop-challenge" target="_blank">Agentic Voice AI Challenge</a> at our <a href="https://ml-collective-africa.github.io/dl-indaba-2026/" target="_blank">workshop</a> at the Deep Learning Indaba: build voice agents that handle code-switched, multilingual speech the way people here actually talk. Think a clinic intake agent that keeps up when a patient drifts from Yoruba into English mid-sentence, a bank's support line that doesn't fall apart on Pidgin, or a farm-advisory or legal-aid assistant that works over an ordinary phone call. Intron's Sahara speech APIs, $2,000 in prizes, and a demo slot at the workshop for the finalists.`,

  `<strong>[Jun 2026]</strong> I'll be organizing a <a href="https://ml-collective-africa.github.io/dl-indaba-2026/" target="_blank">workshop</a> on building agentic AI in Africa, <em>Whose Intelligence? Building Agentic AI in Africa without Frontier Model Dependency</em>, at the <a href="https://deeplearningindaba.com/2026/" target="_blank">Deep Learning Indaba</a> (Lagos).`,

  `<strong>[Jun 2026]</strong> I'll be teaching a skills session, <em>Doing ML Research from the Margins</em>, at the <a href="https://deeplearningindaba.com/2026/" target="_blank">Deep Learning Indaba</a> (Lagos).`,

  `<strong>[May 2026]</strong> I'm starting my summer role on the Inference Optimization Science team at AWS AGI Foundations, working on speculative decoding for efficient inference. Fun times!`,

  `<strong>[May 2026]</strong> I gave a talk at <a href="https://indabaxng.github.io/" target="_blank">IndabaX Nigeria</a> (University of Ibadan): a state-of-the-art overview of efficient AI and what it means for Africa. <a href="https://docs.google.com/presentation/d/1hLY94AmWbORSOQo8Xk-oj_SaiN3G7MXg8w5jBZ2K01c/edit?usp=sharing" target="_blank">Slides</a>.`,

  `<strong>[Apr 2026]</strong> I was selected to participate in the <a href="https://cfe.columbia.edu/content/mlss2" target="_blank">Machine Learning Summer School (MLSS)</a> at Columbia University, New York, fully funded.`,

  `<strong>[Mar 2026]</strong> I gave a guest lecture on model compression in CMU's <a href="https://wwcohen.github.io/10718_s2026/schedule.html" target="_blank">10-718: ML in Practice</a>. Check my slides <a href="https://docs.google.com/presentation/d/12VLlAMGHEKXrYzZC8YAQa4ncxrSlzmeL/edit?slide=id.p1#slide=id.p1" target="_blank">here</a>.`,

  `<strong>[Dec 2025]</strong> Our paper, <a href="https://arxiv.org/abs/2509.07471" target="_blank">From Scarcity to Efficiency: Investigating the Effects of Data Augmentation on African Machine Translation</a>, was accepted at <a href="https://lm4uc.github.io/2026/" target="_blank">LM4UC @ AAAI 2026</a> and published in Springer's CCIS series.`,

  `<strong>[Sep 2025]</strong> <a href="https://openreview.net/forum?id=1KSxxnFNb9" target="_blank">ParallelPrompt: Extracting Parallelism from Large Language Model Queries</a> was accepted at NeurIPS 2025, Datasets &amp; Benchmarks Track.`,

  `<strong>[Sep 2025]</strong> <a href="https://openreview.net/forum?id=28bd6gvVO8" target="_blank">Semantic Agreement Enables Efficient Open-Ended LLM Cascades</a> was accepted at EMNLP 2025, Industry Track.`,

  `<strong>[Jul 2025]</strong> <a href="https://openreview.net/forum?id=jn9B7LMlzk" target="_blank">Agreement-Based Cascading for Efficient Inference</a> was accepted at TMLR.`,

  `<strong>[Jun 2025]</strong> Our preprint, <a href="https://openreview.net/forum?id=MWftALXWmL" target="_blank">Training-Free Semantic Deferrals for Open-Ended LLM Cascades</a>, was accepted into ES-FoMo @ ICML 2025.`,

  `<strong>[Jun 2025]</strong> Our preprint, <a href="https://openreview.net/forum?id=2uMRHHzAIJ" target="_blank">PrivacyBench: Privacy Isn't Free in Hybrid Privacy-Preserving Vision Systems</a>, was accepted into ES-FoMo @ ICML 2025. Congrats to Emeka, Sam, Simi, and Ire (ML Collective folks)!`,

  `<strong>[Nov 2024]</strong> Our preprint, <a href="https://openreview.net/pdf?id=CZHt9kLS5S" target="_blank">Extracting Parallelism from Large Language Model Queries</a>, was accepted into AFM @ NeurIPS 2024.`,

  `<strong>[Jun 2024]</strong> Our preprint, <a href="https://openreview.net/forum?id=SjGmChKOee" target="_blank">Revisiting Cascaded Ensembles for Efficient Inference</a>, was accepted into ES-FoMo @ ICML 2024.`,

  `<strong>[May 2024]</strong> I'll be teaching a low-resource LLM <a href="https://github.com/deep-learning-indaba/indaba-pracs-2024/tree/main/practicals/Low_Resource_LLMs" target="_blank">practical</a> at the <a href="https://deeplearningindaba.com/2024/" target="_blank">Deep Learning Indaba</a> (Senegal).`,

  `<strong>[Apr 2024]</strong> Our preprint, <a href="https://arxiv.org/abs/2404.04759" target="_blank">What Happens When Small Is Made Smaller? Exploring the Impact of Compression on Small Data Pretrained Language Models</a>, was accepted into AfricaNLP @ ICLR 2024.`,

  `<strong>[Feb 2024]</strong> Preprint for <a href="https://arxiv.org/abs/2402.05406" target="_blank">Everybody Prune Now: Structured Pruning of LLMs with only Forward Passes</a> is now available on arXiv.`,

  `<strong>[Sep 2023]</strong> I made my SOP public on <a href="https://cs-sop.org/" target="_blank">cs-sop.org</a>. The platform may be useful for you if you are applying to grad school.`,

  `<strong>[Aug 2023]</strong> We are organizing a fundraiser for 21 African students to attend Deep Learning Indaba.`,

  `<strong>[Jun 2023]</strong> I anchored workshops on the topic, "HuggingFace and You", at <a href="https://indabaxng.github.io/" target="_blank">IndabaX Nigeria</a> and later at <a href="https://festival.oscafrica.org/" target="_blank">OSCAFEST</a>. Check my 150 slides <a href="http://tinyurl.com/oscafest-huggingface-slides" target="_blank">here</a>.`,

  `<strong>[Jun 2023]</strong> Our paper preprint, <a href="https://arxiv.org/abs/2305.19365" target="_blank">Vision Transformers for Mobile Applications: A Short Survey</a>, is available on arXiv.`,

  `<strong>[Mar 2023]</strong> I will be spending the months up till my PhD resumption as a research intern at MBZUAI, Abu Dhabi. UPDATE: Canceled. Visa denied! :(`,

  `<strong>[Mar 2023]</strong> I have fulfilled all requirements for my BSc in Computer Science program at the Federal University of Agriculture Abeokuta. I am now a BSc graduate!`,

  `<strong>[Mar 2023]</strong> Our paper, <a href="https://arxiv.org/abs/2303.16985" target="_blank">Adapting to the Low-Resource Double-Bind: Investigating Low-Compute Methods on Low-Resource African Languages</a>, was accepted into AfricaNLP @ ICLR 2023.`,

  `<strong>[Feb 2023]</strong> I will be resuming PhD at CMU in the fall to work on Efficient ML.`,

  `<strong>[Oct 2022]</strong> I am invited to speak at <a href="https://lanfrica.com/blog/" target="_blank">Lanfrica Talks</a> in November on my sign language understanding project. Hopefully, my last talk on this topic. :)`,

  `<strong>[Oct 2022]</strong> We have finally fulfilled the terms of our grant from the <a href="https://www.algorand.foundation/" target="_blank">Algorand Foundation</a>, and our project, <a href="https://nazari.ai/" target="_blank">ASAlytics (now Nazari)</a>, is finally ready for UAT.`,

  `<strong>[Oct 2022]</strong> I am invited to speak on my research journey as a URM and how I have been able to build my research collaborations as an independent researcher at <a href="https://sites.google.com/view/broadening-collaboration-in-ml/home?authuser=0" target="_blank">NeurIPS 2022 Workshop on Broadening Research Collaborations in ML</a>.`,

  `<strong>[Oct 2022]</strong> I gave the most hilarious talk of my life (to date) at DataFest Africa on the path to ML mastery. Check my slides <a href="https://docs.google.com/presentation/d/1tFYoyiUQC110sPXfYmMg8HT0OIasZIZC/edit?usp=sharing&ouid=111944828990443216883&rtpof=true&sd=true" target="_blank">here</a>. EDIT: I am invited to present the same talk at DevFest Abeokuta in December.`,

  `<strong>[Oct 2022]</strong> <a href="https://www.linkedin.com/in/owojori-ernest-tolulope-734bb1170" target="_blank">Ernest</a> talked on our project, <a href="https://nazari.ai/" target="_blank">ASAlytics (now Nazari)</a>, at DataFest Africa 2022 and on how folks can contribute to our open-source model. See slides <a href="https://docs.google.com/presentation/d/1eiT7GZmSmB5htK83yjRegWB3LXyJDmQd/edit?usp=sharing&ouid=111944828990443216883&rtpof=true&sd=true" target="_blank">here</a>.`,

  `<strong>[Sep 2022]</strong> I will be speaking at Cohere For AI's Independent Research talk panel. EDIT: Check the video recording <a href="https://www.youtube.com/watch?v=pSctj0o7NxA" target="_blank">here</a>.`,

  `<strong>[Sep 2022]</strong> I was interviewed by <a href="https://aihub.org/2022/10/12/interview-with-steven-kolawole-a-sign-to-speech-model-for-nigerian-sign-language/" target="_blank">AIHub</a> on my work on sign-to-speech.`,

  `<strong>[Aug 2022]</strong> <a href="https://docs.google.com/presentation/d/1ZKBrHLDLWZAoaUMAJruMwSIf9JMIqk9pRHp78O_2CjY/edit?usp=sharing" target="_blank">Our work</a> on African Sign Languages Translation is a winner of the Indaba Ideathon Challenge. Congrats, Shester and Mardiyyah!`,

  `<strong>[Aug 2022]</strong> I will be presenting my work on minimizing communication costs in decentralized federated learning using de-mutable torrents at the ML Efficiency workshop at the Indaba. See slides <a href="https://docs.google.com/presentation/d/1Yr9DGKFlkXlG5S9Rn2bXov0hjRMVlpyrSAcfta0QWpM/edit?usp=sharing" target="_blank">here</a>.`,

  `<strong>[Aug 2022]</strong> I am organizing an <a href="https://mlcollective.org/" target="_blank">ML Collective</a>'s family &amp; friends dinner at Deep Learning Indaba. Come join us if you are in Tunisia and you've heard of MLC before!`,

  `<strong>[Aug 2022]</strong> I will present my work on Sign to Speech in sub-Saharan Africa at the "Research in Africa" Showcase Day at Deep Learning Indaba.`,

  `<strong>[Jul 2022]</strong> <a href="https://mlcollective.org/" target="_blank">ML Collective</a> is organizing <a href="https://donorbox.org/mlc-support-deep-learning-indaba" target="_blank">a fundraiser</a> for 9 young African researchers to attend Deep Learning Indaba. Donate here.`,

  `<strong>[Jul 2022]</strong> I will attend this year's <a href="https://deeplearningindaba.com/2022/" target="_blank">Deep Learning Indaba</a>.`,

  `<strong>[Jul 2022]</strong> Nayan and I are being interviewed by the <a href="https://www.utoronto.ca/news" target="_blank">UofT News</a> on the Sign-to-Speech work.`,

  `<strong>[Jul 2022]</strong> I will be speaking at <a href="https://ep2022.europython.eu/" target="_blank">EuroPython Dublin</a> on <a href="https://colinraffel.com/blog/a-call-to-build-models-like-we-build-open-source-software.html" target="_blank">Prof. Colin Raffel's call to build models like we build OSS</a> and the progress made in that direction. See slides <a href="https://docs.google.com/presentation/d/1tEMgrUwnOuvW3lP6RSPLFfAPaQyFB4iJEXKOKU_RstM/edit?usp=sharing" target="_blank">here</a>.`,

  `<strong>[Jun 2022]</strong> My year tenure as the Community Lead for the <a href="https://developers.google.com/community/gdsc" target="_blank">Google Developer Student Club</a> on my campus is over. A huge shoutout to all my fantastic core team members!`,

  `<strong>[May 2022]</strong> I am spending two weeks in Europe and visiting <a href="https://pycon.it/en" target="_blank">PyCon Italia</a> and speaking at <a href="https://2022.berlinbuzzwords.de/" target="_blank">Berlin Buzzwords</a> while at it.`,

  `<strong>[Apr 2022]</strong> My <a href="https://www.ijcai.org/proceedings/2022/0855.pdf" target="_blank">publication</a> on Sign Language Understanding has been accepted as a conference demo at <a href="https://ijcai-22.org/" target="_blank">IJCAI</a>, AI for Social Good Track!`,

  `<strong>[Apr 2022]</strong> I will speak at <a href="https://2022.pycon.de/" target="_blank">PyConDE &amp; PyData Berlin</a> on my sign-to-speech work. See the video recording <a href="https://www.youtube.com/watch?v=X9JwoWccpYI" target="_blank">here</a>.`,

  `<strong>[Mar 2022]</strong> I won the AI Champion award at the <a href="https://www.ncs.org.ng/" target="_blank">Nigeria Computer Society's</a> AI Summit held at Government House, Lafia, Nigeria, for my work on sign language understanding.`,

  `<strong>[Feb 2022]</strong> ASAlytics, our work proposal to build a real-time social media opinion-mining platform for digital assets, has been awarded a ~$115K grant by <a href="https://www.algorand.foundation/" target="_blank">the Algorand Foundation</a>.`,

  `<strong>[Nov 2021]</strong> I am resuming my final session in school as a CS undergrad.`,

  `<strong>[Oct 2021]</strong> I got a full-time role with RectLabs as an AI Research Engineer.`,

  `<strong>[Oct 2021]</strong> My work on Sign-to-Speech for sub-Saharan Africa has been accepted at <a href="https://ml4d.notion.site/Machine-Learning-for-the-Developing-World-ML4D-2021-548251eab3df4517819c4742c2e5c853" target="_blank">the NeurIPS workshop on ML for the Developing World</a>.`,

  `<strong>[Oct 2021]</strong> I am leaving my community role as the Campus Lead for AI+ FUNAAB as I resume the Community Lead role for my school's Google Developer Student Club.`,

  `<strong>[Oct 2021]</strong> My work on sign language understanding won the 2nd Best Poster Award at <a href="https://www.datasciencenigeria.org/ai-bootcamp/" target="_blank">Data Science Nigeria's AI Bootcamp</a>.`,

  `<strong>[Oct 2021]</strong> My research internship with <a href="https://www.seqhubanalytics.com/" target="_blank">SeqHub Analytics LLC</a> is finally over.`,

  `<strong>[Jul 2021]</strong> My work on sign-to-speech for real-time usage won DeepQuest AI's Challenge.`,

  `<strong>[Jan 2021]</strong> I am leaving my community outreach role as the AI+ City Lead for AI+ Abeokuta.`,

  `<strong>[Nov 2020]</strong> AI+ Abeokuta won the <a href="https://twitter.com/dsn_ai_network/status/1328669596216389632" target="_blank">"AI City of the Year" award;</a> and I was the 1st runner-up to the <a href="https://twitter.com/dsn_ai_network/status/1327195508805423104" target="_blank">Mr. Algorithm award</a> at <a href="https://www.datasciencenigeria.org/ai-bootcamp/" target="_blank">the DSN AI Bootcamp 2020</a>.`,

  `<strong>[Aug 2020]</strong> I am speaking at PyCon Africa 2020 on using Streamlit to build data apps.`,

  `<strong>[Feb 2020]</strong> I was one of the 7 finalists at the <a href="https://stevenkolawole.medium.com/can-you-hack-the-future-ideathon-how-we-made-it-to-the-finals-and-lost-a15d932a5bb7" target="_blank">MaxNg X SeqHub's Ideathon</a> for my work on HotUsers, a recommender system with geospatial data to predict hot zones for bikesharing riders in Lagos. Top 7 / 40 odd teams.`,

  `<strong>[Dec 2019]</strong> I won <a href="https://stevenkolawole.medium.com/how-i-won-a-gold-medal-at-naijahacks-19-fdf865126abb/" target="_blank">a gold medal at NaijaHacks 2019</a> for my work on AgroAI, a mobile app that helps farmers detect plant diseases offline, using computer vision. Top 12 / 336 teams.`,
];

function renderNews(containerId, limit) {
  const ul = document.getElementById(containerId);
  if (!ul) return;
  const items = limit ? NEWS_ITEMS.slice(0, limit) : NEWS_ITEMS;
  ul.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}
