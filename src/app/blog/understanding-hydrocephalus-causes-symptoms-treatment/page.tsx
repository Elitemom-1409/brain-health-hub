import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Brain, Heart, Share2 } from 'lucide-react';

export default function HydrocephalusPost() {
  return (
    <article className="min-h-screen py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Back link */}
        <Link href="/blog" className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-purple-400 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-purple-600/20 px-3 py-1 text-xs font-medium text-purple-300">Hydrocephalus</span>
            <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-300">Brain Health</span>
            <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-medium text-green-300">Treatment</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Understanding Hydrocephalus: Causes, Symptoms, and Treatment Options
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 15, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 12 min read</span>
            <span className="flex items-center gap-1.5 text-purple-400"><Brain className="h-4 w-4" /> By Anshika</span>
          </div>
        </header>

        {/* Featured image area */}
        <div className="mb-10 flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-900/20 sm:h-80">
          <div className="text-center">
            <Brain className="mx-auto h-16 w-16 text-purple-400/60" />
            <p className="mt-3 text-sm text-zinc-600">Illustration: Brain with highlighted ventricular system</p>
          </div>
        </div>

        {/* Content */}
        <div className="blog-content space-y-5">

          <p>
            <strong>Hydrocephalus</strong> — often called &ldquo;water on the brain&rdquo; — is a neurological 
            condition where an excessive accumulation of cerebrospinal fluid (CSF) occurs within the 
            brain&apos;s ventricles. This buildup causes increased intracranial pressure, which can 
            lead to brain damage and a range of cognitive and physical impairments if left untreated. 
            While the term may sound alarming, modern medicine offers several effective treatment 
            options that allow individuals with hydrocephalus to lead full, productive lives.
          </p>

          <p>
            In this comprehensive guide, we will explore the types, causes, symptoms, diagnostic 
            methods, treatment options, and long-term outlook for hydrocephalus. Whether you are 
            a newly diagnosed patient, a concerned family member, or a healthcare professional 
            seeking a refresher, this article provides the essential information you need.
          </p>

          <h2>What Is Cerebrospinal Fluid (CSF)?</h2>

          <p>
            To understand hydrocephalus, we must first understand cerebrospinal fluid. CSF is a 
            clear, colorless liquid that surrounds the brain and spinal cord. It serves several 
            critical functions:
          </p>

          <ul>
            <li><strong>Protection:</strong> CSF acts as a cushion, protecting the brain from injury during sudden movements or trauma.</li>
            <li><strong>Buoyancy:</strong> It reduces the effective weight of the brain from about 1.5 kg to roughly 50 grams, preventing the brain&apos;s weight from compressing blood vessels and nerves at the base of the skull.</li>
            <li><strong>Waste Removal:</strong> CSF helps remove metabolic waste products from the brain.</li>
            <li><strong>Nutrient Transport:</strong> It delivers nutrients and chemical messengers throughout the central nervous system.</li>
          </ul>

          <p>
            In a healthy individual, the body produces about 500 mL of CSF daily, and an equal 
            amount is absorbed into the bloodstream. Hydrocephalus occurs when this delicate 
            balance is disrupted — either too much CSF is produced, or (more commonly) the fluid 
            cannot drain properly.
          </p>

          <h2>Types of Hydrocephalus</h2>

          <p>
            Hydrocephalus is classified into several types based on its cause and onset:
          </p>

          <h3>1. Congenital Hydrocephalus</h3>
          <p>
            Present at birth, congenital hydrocephalus results from genetic factors or developmental 
            abnormalities during fetal growth. It affects approximately <strong>1 in every 770 newborns</strong> 
            and is one of the most common birth defects globally. Conditions associated with congenital 
            hydrocephalus include:
          </p>
          <ul>
            <li><strong>Aqueductal stenosis</strong> — narrowing of the cerebral aqueduct, the passage that connects the third and fourth ventricles</li>
            <li><strong>Neural tube defects</strong> such as spina bifida</li>
            <li><strong>Dandy-Walker malformation</strong> — a condition where the cerebellum does not develop normally</li>
            <li><strong>Intrauterine infections</strong> like toxoplasmosis, rubella, or cytomegalovirus</li>
          </ul>

          <h3>2. Acquired Hydrocephalus</h3>
          <p>
            This type develops after birth, often as a result of:
          </p>
          <ul>
            <li><strong>Brain tumors</strong> that obstruct CSF pathways</li>
            <li><strong>Intracranial hemorrhage</strong> (especially in premature infants)</li>
            <li><strong>Meningitis</strong> or other central nervous system infections</li>
            <li><strong>Traumatic brain injury</strong></li>
          </ul>

          <h3>3. Normal Pressure Hydrocephalus (NPH)</h3>
          <p>
            NPH most commonly affects older adults over 60. Despite normal CSF pressure readings, 
            the ventricles remain enlarged. The classic triad of symptoms includes:
          </p>
          <ul>
            <li><strong>Gait disturbance</strong> — difficulty walking, described as a &ldquo;magnetic&rdquo; or shuffling gait</li>
            <li><strong>Cognitive decline</strong> — memory loss, slow thinking, difficulty concentrating</li>
            <li><strong>Urinary incontinence</strong> — loss of bladder control</li>
          </ul>
          <p>
            NPH is particularly significant because it is one of the <strong>few reversible causes of dementia</strong> — 
            early diagnosis and treatment can dramatically improve symptoms.
          </p>

          <h3>4. Hydrocephalus Ex-Vacuo</h3>
          <p>
            This occurs when the brain shrinks due to aging, stroke, or neurodegenerative disease. 
            Unlike other types, the CSF pressure is normal, and the enlargement of ventricles is a 
            compensatory response to brain tissue loss rather than a problem with CSF dynamics.
          </p>

          <h2>Symptoms by Age Group</h2>

          <p>The presentation of hydrocephalus varies significantly depending on the patient&apos;s age:</p>

          <h3>In Infants</h3>
          <ul>
            <li>Rapidly enlarging head circumference</li>
            <li>Bulging or tense fontanelle (soft spot on the top of the head)</li>
            <li>Vomiting, irritability, and poor feeding</li>
            <li>Downward deviation of the eyes (&ldquo;sunsetting eyes&rdquo;)</li>
            <li>Seizures and developmental delays</li>
            <li>High-pitched cry and lethargy</li>
          </ul>

          <h3>In Children and Adolescents</h3>
          <ul>
            <li>Headaches, often worse in the morning</li>
            <li>Nausea and vomiting</li>
            <li>Blurred or double vision</li>
            <li>Difficulty concentrating and declining academic performance</li>
            <li>Balance problems and coordination difficulties</li>
            <li>Personality or behavioral changes</li>
          </ul>

          <h3>In Adults</h3>
          <ul>
            <li>Chronic headaches and neck pain</li>
            <li>Vision changes, including blurred or double vision</li>
            <li>Difficulty walking or maintaining balance</li>
            <li>Cognitive decline — memory loss, confusion, slowed thinking</li>
            <li>Loss of bladder control</li>
            <li>Fatigue and lethargy</li>
          </ul>

          <h2>Diagnosis</h2>

          <p>
            Early diagnosis is critical for successful treatment. The diagnostic process typically involves:
          </p>

          <ol>
            <li><strong>Clinical evaluation</strong> — a detailed medical history and neurological examination assessing reflexes, coordination, eye movements, and cognitive function.</li>
            <li><strong>Imaging studies</strong> — ultrasound (in infants with open fontanelles), CT scans, and MRI scans provide detailed images of the brain&apos;s ventricles and help identify obstructions.</li>
            <li><strong>Intracranial pressure monitoring</strong> — a thin catheter may be inserted to measure CSF pressure over 24-48 hours.</li>
            <li><strong>Lumbar puncture (spinal tap)</strong> — in suspected NPH, removing a large volume of CSF may temporarily improve symptoms, confirming the diagnosis.</li>
          </ol>

          <h2>Treatment Options</h2>

          <p>
            Treatment of hydrocephalus primarily involves surgical intervention. The two most common 
            procedures are:
          </p>

          <h3>1. Shunt Placement (VP Shunt)</h3>
          <p>
            A ventriculoperitoneal (VP) shunt is a thin, flexible tube surgically implanted to drain 
            excess CSF from the brain&apos;s ventricles to the abdominal cavity, where it is absorbed 
            by the bloodstream. The shunt contains a valve that regulates the flow of fluid and 
            prevents backflow. Key considerations include:
          </p>
          <ul>
            <li>Shunts are <strong>lifelong implants</strong> — most patients will need multiple revisions over their lifetime</li>
            <li>Shunt failure rates are highest within the first 2 years after placement</li>
            <li>Modern programmable valves allow external adjustment of flow settings without additional surgery</li>
            <li>Shunt infection occurs in approximately 5-10% of cases, most commonly within 3-6 months of surgery</li>
          </ul>

          <h3>2. Endoscopic Third Ventriculostomy (ETV)</h3>
          <p>
            ETV is a minimally invasive procedure where a neuroendoscope is used to create a small 
            hole in the floor of the third ventricle, allowing CSF to bypass obstructions and flow 
            directly into the subarachnoid space. This procedure is most effective for patients with 
            obstructive hydrocephalus (particularly aqueductal stenosis). The advantages include:
          </p>
          <ul>
            <li><strong>No foreign body implant</strong> — eliminating the risk of shunt infection or mechanical failure</li>
            <li><strong>Lower long-term complication rates</strong> compared to shunting</li>
            <li><strong>Faster recovery</strong> — many children can go home within 2-3 days</li>
          </ul>

          <h2>Living with Hydrocephalus</h2>

          <p>
            With timely treatment and proper medical follow-up, the prognosis for individuals with 
            hydrocephalus is generally good. Many children with treated hydrocephalus attend regular 
            schools, participate in sports, and pursue higher education and careers. However, the 
            condition does require lifelong management:
          </p>

          <ul>
            <li><strong>Regular follow-up</strong> with a neurosurgeon and neurologist</li>
            <li><strong>Cognitive and developmental assessments</strong> to identify areas needing support</li>
            <li><strong>Physical and occupational therapy</strong> as needed</li>
            <li><strong>Emotional and psychological support</strong> for both patients and caregivers</li>
          </ul>

          <h2>Global Impact and Awareness</h2>

          <p>
            Hydrocephalus affects people of all ages, races, and socioeconomic backgrounds. In 
            developing countries, the burden is particularly high due to limited access to 
            neurosurgical care. Organizations worldwide are working to:
          </p>

          <ul>
            <li>Train neurosurgeons in underserved regions</li>
            <li>Develop affordable shunt technologies</li>
            <li>Raise awareness to reduce stigma and promote early intervention</li>
            <li>Support research into better treatments and ultimately, prevention</li>
          </ul>

          <blockquote>
            &ldquo;Hydrocephalus is not a death sentence. With proper treatment and support, 
            individuals with hydrocephalus can thrive. The key is awareness, early diagnosis, 
            and access to quality neurosurgical care.&rdquo; — World Hydrocephalus Awareness Organization
          </blockquote>

          <h2>Conclusion</h2>

          <p>
            Hydrocephalus is a complex neurological condition that requires a multidisciplinary 
            approach to management. From the initial diagnosis to lifelong follow-up care, patients 
            and their families need comprehensive medical care, emotional support, and reliable 
            information. Advances in neurosurgery — particularly programmable shunts and 
            endoscopic techniques — have dramatically improved outcomes over the past few decades.
          </p>

          <p>
            If you or a loved one has been diagnosed with hydrocephalus, remember that you are not 
            alone. Reach out to support groups, connect with other families, and stay informed about 
            the latest treatment options. With the right care and support, the journey ahead can be 
            one of hope, resilience, and quality of life.
          </p>

          <p>
            <strong>Disclaimer:</strong> This article is for informational purposes only and should not 
            replace professional medical advice. Always consult with a qualified healthcare provider 
            for diagnosis and treatment recommendations.
          </p>
        </div>

        {/* References */}
        <section className="mt-12 rounded-2xl border border-purple-900/20 bg-purple-950/10 p-6">
          <h2 className="mb-4 text-lg font-bold text-white">References</h2>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>1. National Institute of Neurological Disorders and Stroke. Hydrocephalus Fact Sheet. NINDS, 2024.</li>
            <li>2. Kahle KT, et al. Hydrocephalus in children. The Lancet, 2016; 387(10020): 788-799.</li>
            <li>3. World Health Organization. Birth Defects Surveillance: A Manual for Programme Managers. WHO, 2020.</li>
            <li>4. Hydrocephalus Association. <a href="https://www.hydroassoc.org" className="text-purple-400 hover:text-purple-300 underline">www.hydroassoc.org</a></li>
            <li>5. International Society for Hydrocephalus and CSF Disorders. <a href="https://www.ishcsfd.org" className="text-purple-400 hover:text-purple-300 underline">www.ishcsfd.org</a></li>
          </ul>
        </section>

        {/* Share / CTA */}
        <section className="mt-10 flex flex-col items-center gap-6 rounded-2xl border border-pink-900/20 bg-pink-950/10 p-8 text-center sm:flex-row sm:text-left">
          <Heart className="h-10 w-10 shrink-0 text-pink-400" />
          <div>
            <h3 className="text-lg font-bold text-white">Found this helpful?</h3>
            <p className="text-sm text-zinc-400">Share this article to spread awareness about hydrocephalus. Every share helps another family.</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button className="inline-flex items-center gap-1.5 rounded-full bg-purple-600/20 px-4 py-2 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-600/30">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <Link href="/donate" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105">
              <Heart className="h-4 w-4" /> Support
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
