<?php
/**
 * Template Name: Conference Committees
 *
 * @package ICRAIIQ2IT_2027
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

$committee_sections = [
    [
        'category' => 'Chief Patrons',
        'members'  => [
            ['name' => 'Dr R Venkat Rao', 'role' => 'Chancellor', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU), Agiripalli, Vijayawada'],
            ['name' => 'Prof K R S Sambasivarao', 'role' => 'Vice-Chancellor', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Sri Teja Sai Moturi', 'role' => 'CEO', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
        ]
    ],
    [
        'category' => 'Patrons',
        'members'  => [
            ['name' => 'Dr C Naga Bhaskar', 'role' => 'Pro-Vice Chancellor', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr G Sambasivarao', 'role' => 'Pro-Vice Chancellor', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
        ]
    ],
    [
        'category' => 'General Chair',
        'members'  => [
            ['name' => 'Dr. K. V. Sambasiva Rao', 'role' => 'Professor & Dean, R & D', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
        ]
    ],
    [
        'category' => 'Convener & Co-Convener',
        'members'  => [
            ['name' => 'Dr D Sunitha', 'role' => 'HOD : Dean : School of Computer Studies', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Prof. B Venugopal', 'role' => 'HOD : CSE', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
        ]
    ],
    [
        'category' => 'Advisory Committee (International)',
        'members'  => [
            ['name' => 'Srikanth Bellamkonda', 'role' => 'Assistant Vice President | Networks & Security', 'affiliation' => 'Barclays Services Corp, New Jersey, USA'],
            ['name' => 'Vishal Jain', 'role' => 'Software Engineering Leader', 'affiliation' => 'NYC, USA, NJ, USA'],
            ['name' => 'Niranjan Reddy Kotha', 'role' => 'Sr. Cloud and Infrastructure Security engineer', 'affiliation' => 'Charter Communication, Colorado, USA'],
            ['name' => 'Dr. Mohammad S Khan', 'role' => 'Professor, Department of Computing', 'affiliation' => 'East Tennessee State University, USA'],
            ['name' => 'Prof. Marcos Eduardo Valle', 'role' => 'Assistant Professor of Applied Mathematics', 'affiliation' => 'IMECC, University of Campinas, Brazil'],
            ['name' => 'Prof. Marco Di Renzo', 'role' => 'CNRS Research Director', 'affiliation' => 'Centrale Supelec – University Paris-Sud, Paris, FRANCE'],
            ['name' => 'Prof. Saad Mekhilef', 'role' => 'Dean & Professor', 'affiliation' => 'University of Malaya, Malaysia'],
            ['name' => 'Rachit Gupta', 'role' => 'Sr. Technical Architect', 'affiliation' => 'Guardian Life Insurance, TN, USA'],
            ['name' => 'Jyotirmay Jena', 'role' => 'Associate General Manager', 'affiliation' => 'HCL Technologies, Texas, United States'],
            ['name' => 'Dr. Shashi Kant Gupta', 'role' => 'Adjunct Research Faculty', 'affiliation' => 'Lincoln University College, Malaysia'],
            ['name' => 'Muhammad Saqib', 'role' => 'Delivery Consultant - AI/ML & Cybersecurity', 'affiliation' => 'Amazon Web Services – USA, Texas, USA'],
            ['name' => 'Sudheer Kolla', 'role' => 'Senior PostgreSQL DBA', 'affiliation' => 'Centers for Medicare & Medicaid Services, Baltimore, MD, USA'],
            ['name' => 'Shubham Malhotra', 'role' => 'Software Developer', 'affiliation' => 'Amazon Web Services, Washington, United States'],
            ['name' => 'Shilpi Bhattacharyya', 'role' => 'Global Product Manager', 'affiliation' => 'IBM, New York, United States'],
            ['name' => 'Dr. Vinay Kumar Kasula', 'role' => 'Independent Researcher', 'affiliation' => 'University of the Cumberlands, Virginia, USA'],
            ['name' => 'Sam Prakash Bheri', 'role' => 'Principal Technical Manager', 'affiliation' => 'Microsoft, WA, USA'],
            ['name' => 'Raja Chakraborty', 'role' => 'Senior Engineer', 'affiliation' => 'LiveNation Ent., Ticketmaster, CA, USA'],
            ['name' => 'Chinmay Jain', 'role' => 'Group Product Manager', 'affiliation' => 'Waymo, CA, USA'],
            ['name' => 'Priya Yesare', 'role' => 'Principal SQA Engineer', 'affiliation' => 'Asurion, Nashville, TN, USA'],
            ['name' => 'Dr. Mounica Yenugula', 'role' => 'Sr. Cloud Services Engineer', 'affiliation' => 'Equifax, Atlanta, Georgia'],
            ['name' => 'Ruthvik Uppaluri', 'role' => 'Manager, FP&A Systems', 'affiliation' => 'University of Missouri at Kansas City, MO, USA'],
        ]
    ],
    [
        'category' => 'Technical Program Committee',
        'members'  => [
            ['name' => 'Dr D Sunitha', 'role' => 'Chair | Dean : School of Computer Studies', 'affiliation' => 'Dr RVR NRIIT (DTBU)'],
            ['name' => 'Dr. Rama Sree Sripada', 'role' => 'Pro Vice-Chancellor (Academics) & Professor in CSE', 'affiliation' => 'Aditya University, Kakinada'],
            ['name' => 'Ankur Bhatnagar', 'role' => 'IEEE Senior member, Tech Leader', 'affiliation' => 'Austin, Texas, United States'],
            ['name' => 'Dr Balwinder Raj', 'role' => 'Associate Professor', 'affiliation' => 'NIT Jalandhar, Punjab'],
            ['name' => 'Neha Boloor', 'role' => 'Software Engineer', 'affiliation' => 'Zoox Inc., Foster City, California, USA'],
            ['name' => 'Yuhao Chen', 'role' => 'Data Scientist at Circle, UC Berkeley', 'affiliation' => 'Circle Internet Financial, New York, United States'],
            ['name' => 'Praveen Hegde', 'role' => 'Senior Manager - Emerging Commercial Platforms', 'affiliation' => 'Verizon, Atlanta, United States'],
            ['name' => 'Dr Anasuya Sesha Roopa Devi Bhima', 'role' => 'Professor', 'affiliation' => 'Conestoga College, Ontario, Canada'],
            ['name' => 'Prof. Paritosh Bhattacharya', 'role' => 'Professor', 'affiliation' => 'NIT Agartala'],
            ['name' => 'Dr. Bhargavi Konda', 'role' => 'Independent Researcher', 'affiliation' => 'University of the Cumberlands, Massachusetts, USA'],
            ['name' => 'Dr Manisha Bharti', 'role' => 'Associate Professor', 'affiliation' => 'NIT Delhi'],
            ['name' => 'Mr. Uma Desu', 'role' => 'GenAI Specialist', 'affiliation' => 'IntelliIndia, Hyderabad'],
            ['name' => 'Mr. Sai Satish Damaraju', 'role' => 'Founder and CEO', 'affiliation' => 'Indian Servers, Vijayawada'],
            ['name' => 'Mr. Abhishek Doijode', 'role' => 'Chief Talent Officer', 'affiliation' => 'Virtusa'],
            ['name' => 'Prof. V. Ch Venkaiah', 'role' => 'School of Computer Science', 'affiliation' => 'University of Hyderabad'],
        ]
    ],
    [
        'category' => 'National Advisory Committee',
        'members'  => [
            ['name' => 'Dr Ch V Murali Krishna', 'role' => 'HOD CS-DSc.', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Prof. J Rajendra Prasad', 'role' => 'IT Dept, NRIIT', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr. Ramesh Kumar Bhukya', 'role' => 'Faculty', 'affiliation' => 'IIIT-Allahabad, Prayagraj'],
            ['name' => 'Prof. Venugopal Boppana', 'role' => 'Professor, CSE', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr. Neha Gupta', 'role' => 'Associate Professor', 'affiliation' => 'VIT-AP University'],
            ['name' => 'Mr. Veeranjaneyulu Kureti', 'role' => 'Technical Specialist Team Lead', 'affiliation' => 'Accenture Innovation Hub, Bengaluru'],
            ['name' => 'Dr. Makineedi Rajababu', 'role' => 'Associate Professor', 'affiliation' => 'Aditya University, Kakinada'],
            ['name' => 'Dr. Anoop Kumar Mishra', 'role' => 'Professor', 'affiliation' => 'VIT-AP University'],
            ['name' => 'Dr T S Ravi Kiran', 'role' => 'HOD & Associate Prof.', 'affiliation' => 'PBSc., Vijayawada'],
            ['name' => 'Dr. Kanwarpreet Kaur', 'role' => 'Assistant Professor', 'affiliation' => 'Thapar Institute of Eng. & Tech., Punjab'],
            ['name' => 'Dr. Manjunath Mulimani', 'role' => 'Faculty', 'affiliation' => 'Manipal Institute of Technology, MAHE, Manipal'],
            ['name' => 'Dr Jay Singh', 'role' => 'Professor', 'affiliation' => 'BL Bajaj Institute of Tech., New Delhi'],
            ['name' => 'Prof. Rama Murthy Garimella', 'role' => 'Professor', 'affiliation' => 'Mahindra University, Hyderabad'],
            ['name' => 'Dr. J. Venkataramanaiah', 'role' => 'Faculty, EEE', 'affiliation' => 'NIT Surat'],
            ['name' => 'Dr. Bheemappa Halavar', 'role' => 'Faculty', 'affiliation' => 'IIIT Sri City'],
            ['name' => 'Dr Y Arpitha', 'role' => 'Faculty, CS-DSc.', 'affiliation' => 'NRIIT'],
            ['name' => 'Prof. Kuthadi Venu Madhav', 'role' => 'Dept of CS & IS', 'affiliation' => 'Intl. Univ. of Sc. & Tech., Botswana'],
            ['name' => 'Dr Shesha Raghunathan', 'role' => 'Quantum Computing Leader', 'affiliation' => 'IBM, Bengaluru'],
            ['name' => 'Dr Koppala Guravaiah', 'role' => 'Dept of CSE', 'affiliation' => 'IIIT Kottayam'],
            ['name' => 'Dr M Venkateswara Rao', 'role' => 'Faculty, IT', 'affiliation' => 'Dr RVR NRIIT (DTBU)'],
            ['name' => 'Dr Bh Dasaradh Ram', 'role' => 'HOD CS-AIML', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr P Rajendra Kumar', 'role' => 'HOD AIML', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Prof. V.V. Subrahmanyam', 'role' => 'Director & Professor, SOCIS', 'affiliation' => 'IGNOU, New Delhi'],
            ['name' => 'Dr. Shonak Bansal', 'role' => 'Associate Professor', 'affiliation' => 'Chandigarh University'],
            ['name' => 'Dr G Shobana', 'role' => 'Faculty, CSE', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr T Manasa Veena', 'role' => 'Faculty, AIML', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr. K Gayatri', 'role' => 'Associate Prof., CSE', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Prof. V Teju', 'role' => 'Faculty, CS-AIML', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
        ]
    ],
    [
        'category' => 'Editorial Committee',
        'members'  => [
            ['name' => 'Dr K V Sambasiva Rao', 'role' => 'Chair | Director, R & D', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr Anasuya Sesha Roopa Devi Bhima', 'role' => 'Co-Chair | Professor', 'affiliation' => 'Conestoga College, Ontario, Canada'],
            ['name' => 'Dr D Sunitha', 'role' => 'Dean, School of Computer Studies', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Prof. B Venugopal', 'role' => 'HOD: CSE', 'affiliation' => 'Dr RVR NRI Institute of Technology (DTBU)'],
            ['name' => 'Dr. Udit Satija', 'role' => 'Faculty', 'affiliation' => 'IIT Patna'],
            ['name' => 'Dr. Vinay Kumar Kasula', 'role' => 'Independent Researcher', 'affiliation' => 'University of the Cumberlands, Virginia, USA'],
            ['name' => 'Dr. Dakshina Ranjan Kisku', 'role' => 'Associate Professor, CSE', 'affiliation' => 'NIT Durgapur, West Bengal'],
        ]
    ],
];
?>

<main class="min-h-screen bg-white text-[#17213a] antialiased pb-12">
    <!-- Header -->
    <section class="bg-white py-5 sm:py-6">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
                Conference <span class="text-[#F97316]">Committees</span>
            </h1>
            <div class="mx-auto mt-2 h-1 w-24 rounded-full bg-[#F97316]"></div>
            <p class="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                <?php esc_html_e('Distinguished academic leaders, steering chairs, and international advisory panels.', 'icraiiq2it-2027'); ?>
            </p>
        </div>
    </section>

    <!-- Committee Two-Column Tables -->
    <section class="px-4 sm:px-6 lg:px-8 py-4">
        <div class="mx-auto max-w-[1240px] space-y-6">
            <?php foreach ($committee_sections as $sec) : ?>
                <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                    <!-- Table Header -->
                    <div class="bg-slate-50 border-b border-slate-200 px-5 py-3">
                        <h2 class="text-base sm:text-lg font-black text-[#1D315F]">
                            <?php echo esc_html($sec['category']); ?>
                        </h2>
                    </div>

                    <!-- Members Rows -->
                    <div class="divide-y divide-slate-100">
                        <?php foreach ($sec['members'] as $m) : ?>
                            <div class="p-3.5 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 hover:bg-orange-50/30 transition-colors">
                                <div class="flex items-center gap-2.5">
                                    <span class="h-2 w-2 rounded-full bg-[#F97316] shrink-0"></span>
                                    <span class="font-bold text-sm text-[#1D315F]"><?php echo esc_html($m['name']); ?></span>
                                    <?php if (!empty($m['role'])) : ?>
                                        <span class="text-xs font-semibold text-[#F97316]">
                                            — <?php echo esc_html($m['role']); ?>
                                        </span>
                                    <?php endif; ?>
                                </div>
                                <div class="text-xs text-slate-500 sm:text-right pl-4 sm:pl-0">
                                    <?php echo esc_html($m['affiliation']); ?>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
</main>

<?php
get_footer();
