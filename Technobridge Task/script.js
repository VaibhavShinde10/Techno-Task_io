    // Tab Functionality
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(tab.getAttribute('data-target')).classList.add('active');
        });
    });

    // Accordion Functionality
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
// Function to show the popup with course title
function showPopup(courseTitle) {
    const popup = document.getElementById('popup');
    const courseTitleElement = document.getElementById('course-title');
    courseTitleElement.textContent = courseTitle;
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

    // JavaScript for Mobile Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const coursesBtn = document.getElementById('courses-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle Dropdown Menu on Click
coursesBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    dropdownMenu.classList.toggle('active');
});

const contentSection = document.getElementById('content');

function loadContent(contentType) {
    const contentSection = document.getElementById('content');

    switch (contentType) {


    case 'web-development':
        contentSection.innerHTML = `
        <!-- Page Content -->
<div class="container">
    <!-- Main Content -->
    <div class="main-content">
        <h1>Ultimate Web Development Course</h1>
        <img src="https://via.placeholder.com/800x300" alt="Course Image" style="width: 100%; margin-bottom: 20px;">

        <!-- Tabs -->
        <div class="tabs">
            <div class="tab active" data-target="#overview">Overview</div>
            <div class="tab" data-target="#curriculum">Curriculum</div>
            <div class="tab" data-target="#faqs">FAQs</div>
        </div>

        <!-- Tab Content -->
        <div id="overview" class="tab-content active">
            <h2>Course Overview</h2>
            <p>This course is designed for beginners and covers everything you need to become a proficient web developer.</p>
            <ul>
                <li>HTML, CSS, and JavaScript</li>
                <li>Responsive Design</li>
                <li>Front-end Frameworks</li>
                <li>Back-end Development</li>
            </ul>
        </div>

        <div id="curriculum" class="tab-content">
            <h2>Course Curriculum</h2>
            <div class="accordion">
                <div class="accordion-header">Module 1: Introduction to HTML</div>
                <div class="accordion-content">
                    <ol>
                        <li>Basic HTML Structure</li>
                        <li>Text and Media Elements</li>
                        <li>Forms and Input Elements</li>
                    </ol>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Module 2: Advanced CSS</div>
                <div class="accordion-content">
                    <ol>
                        <li>Selectors and Specificity</li>
                        <li>Flexbox and Grid Layout</li>
                        <li>Animations and Transitions</li>
                    </ol>
                </div>
            </div>
        </div>

        <div id="faqs" class="tab-content">
            <h2>Frequently Asked Questions</h2>
            <div class="accordion">
                <div class="accordion-header">What is the duration of the course?</div>
                <div class="accordion-content">The course lasts for 12 weeks with flexible learning options.</div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Do I need prior experience?</div>
                <div class="accordion-content">No, this course is suitable for complete beginners.</div>
            </div>
        </div>
    </div>

    <!-- Sticky Sidebar -->
    <div class="sticky-sidebar">
        <h3>Course Details</h3>
        <table>
            <tr>
                <th>Duration</th>
                <td>12 Weeks</td>
            </tr>
            <tr>
                <th>Fees</th>
                <td>$499</td>
            </tr>
            <tr>
                <th>Level</th>
                <td>Beginner</td>
            </tr>
        </table>
        <button style="width: 100%; padding: 10px; background: #007bff; color: #fff;">Enroll Now</button>
    </div>
</div>
    
        `;
        break;
        case 'digital-marketing':
            contentSection.innerHTML = `
                       <div class="container" id="content">
    <!-- Main Content -->
    <div class="main-content">
        <h1>Advanced Digital Marketing Course</h1>
        <img src="https://via.placeholder.com/800x400" alt="Course Banner" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">

        <!-- Tabs -->
        <div class="tabs">
            <div class="tab active" data-target="#overview">Overview</div>
            <div class="tab" data-target="#curriculum">Curriculum</div>
            <div class="tab" data-target="#faqs">FAQs</div>
        </div>

        <!-- Tab Content -->
        <div id="overview" class="tab-content active">
            <h2>Course Overview</h2>
            <p>This course provides a comprehensive guide to mastering digital marketing. Whether you’re a beginner or looking to enhance your skills, this course has everything you need to excel in digital marketing.</p>
            <h3>Benefits of the Course:</h3>
            <ul>
                <li>In-depth SEO training</li>
                <li>Expert-led Social Media Marketing sessions</li>
                <li>Hands-on Google Ads projects</li>
                <li>Content Marketing and Strategy planning</li>
            </ul>
        </div>

        <div id="curriculum" class="tab-content">
            <h2>Course Curriculum</h2>
            <div class="accordion">
                <div class="accordion-header">Module 1: Introduction to Digital Marketing</div>
                <div class="accordion-content">
                    <ol>
                        <li>Understanding the Digital Landscape</li>
                        <li>Marketing Channels Overview</li>
                        <li>Setting Up Your Online Presence</li>
                    </ol>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Module 2: SEO and Content Marketing</div>
                <div class="accordion-content">
                    <ol>
                        <li>Keyword Research Techniques</li>
                        <li>On-Page and Off-Page SEO</li>
                        <li>Creating a Content Strategy</li>
                    </ol>
                </div>
            </div>
        </div>

        <div id="faqs" class="tab-content">
            <h2>Frequently Asked Questions</h2>
            <div class="accordion">
                <div class="accordion-header">What is the duration of the course?</div>
                <div class="accordion-content">The course duration is 3 months, with flexible learning options.</div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Are there any prerequisites?</div>
                <div class="accordion-content">No prerequisites are required. This course is designed for beginners.</div>
            </div>
        </div>
    </div>

    <!-- Sticky Sidebar -->
    <div class="sticky-sidebar">
        <h3>Course Details</h3>
        <table>
            <tr>
                <th>Duration</th>
                <td>3 Months</td>
            </tr>
            <tr>
                <th>Fees</th>
                <td>$599</td>
            </tr>
            <tr>
                <th>Level</th>
                <td>Beginner to Advanced</td>
            </tr>
        </table>
        <button style="width: 100%; padding: 15px; background: #007bff; color: #fff;">Enroll Now</button>
    </div>
</div>
            `;
            break;
            case 'data-science':
                contentSection.innerHTML = `
                                <div class="container" id="content">
    <!-- Main Content -->
    <div class="main-content">
        <h1>Advanced Data Science Course</h1>
        <img src="https://via.placeholder.com/800x400" alt="Course Banner" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">

        <!-- Tabs -->
        <div class="tabs">
            <div class="tab active" data-target="#overview">Overview</div>
            <div class="tab" data-target="#curriculum">Curriculum</div>
            <div class="tab" data-target="#faqs">FAQs</div>
        </div>

        <!-- Tab Content -->
        <div id="overview" class="tab-content active">
            <h2>Course Overview</h2>
            <p>This course provides a comprehensive guide to mastering data science. Whether you’re a beginner or looking to enhance your skills, this course has everything you need to excel in data science.</p>
            <h3>Benefits of the Course:</h3>
            <ul>
                <li>In-depth data analytics</li>
                <li>Expert-led data reserach Marketing sessions</li>
                <li>Hands-onprojects</li>
                <li>Content data and  planning</li>
            </ul>
        </div>

        <div id="curriculum" class="tab-content">
            <h2>Course Curriculum</h2>
            <div class="accordion">
                <div class="accordion-header">Module 1: Introduction to Digital Marketing</div>
                <div class="accordion-content">
                    <ol>
                        <li>Understanding the data Landscape</li>
                        <li>data Channels Overview</li>
                        <li>Setting Up Your Online Presence</li>
                    </ol>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Module 2: Data Science</div>
                <div class="accordion-content">
                    <ol>
                        <li>Keyword Research Techniques</li>
                        <li>On-Page and Off-Page SEO</li>
                        <li>Creating a Content Strategy</li>
                    </ol>
                </div>
            </div>
        </div>

        <div id="faqs" class="tab-content">
            <h2>Frequently Asked Questions</h2>
            <div class="accordion">
                <div class="accordion-header">What is the duration of the course?</div>
                <div class="accordion-content">The course duration is 3 months, with flexible learning options.</div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Are there any prerequisites?</div>
                <div class="accordion-content">No prerequisites are required. This course is designed for beginners.</div>
            </div>
        </div>
    </div>

    <!-- Sticky Sidebar -->
    <div class="sticky-sidebar">
        <h3>Course Details</h3>
        <table>
            <tr>
                <th>Duration</th>
                <td>3 Months</td>
            </tr>
            <tr>
                <th>Fees</th>
                <td>$599</td>
            </tr>
            <tr>
                <th>Level</th>
                <td>Beginner to Advanced</td>
            </tr>
        </table>
        <button style="width: 100%; padding: 15px; background: #007bff; color: #fff;">Enroll Now</button>
    </div>
</div>
                `;
                break;
                case 'graphic-design':
            contentSection.innerHTML = `
                                            <div class="container" id="content">
    <!-- Main Content -->
    <div class="main-content">
        <h1>Ultimate Graphic Design</h1>
        <img src="https://via.placeholder.com/800x400" alt="Course Banner" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">

        <!-- Tabs -->
        <div class="tabs">
            <div class="tab active" data-target="#overview">Overview</div>
            <div class="tab" data-target="#curriculum">Curriculum</div>
            <div class="tab" data-target="#faqs">FAQs</div>
        </div>

        <!-- Tab Content -->
        <div id="overview" class="tab-content active">
            <h2>Course Overview</h2>
            <p>This course provides a comprehensive guide to mastering data science. Whether you’re a beginner or looking to enhance your skills, this course has everything you need to excel in data science.</p>
            <h3>Benefits of the Course:</h3>
            <ul>
                <li>In-depth data analytics</li>
                <li>Expert-led data reserach Marketing sessions</li>
                <li>Hands-onprojects</li>
                <li>Content data and  planning</li>
            </ul>
        </div>

        <div id="curriculum" class="tab-content">
            <h2>Course Curriculum</h2>
            <div class="accordion">
                <div class="accordion-header">Module 1: Introduction to Digital Marketing</div>
                <div class="accordion-content">
                    <ol>
                        <li>Understanding the data Landscape</li>
                        <li>data Channels Overview</li>
                        <li>Setting Up Your Online Presence</li>
                    </ol>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Module 2: Data Science</div>
                <div class="accordion-content">
                    <ol>
                        <li>Keyword Research Techniques</li>
                        <li>On-Page and Off-Page SEO</li>
                        <li>Creating a Content Strategy</li>
                    </ol>
                </div>
            </div>
        </div>

        <div id="faqs" class="tab-content">
            <h2>Frequently Asked Questions</h2>
            <div class="accordion">
                <div class="accordion-header">What is the duration of the course?</div>
                <div class="accordion-content">The course duration is 3 months, with flexible learning options.</div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Are there any prerequisites?</div>
                <div class="accordion-content">No prerequisites are required. This course is designed for beginners.</div>
            </div>
        </div>
    </div>

    <!-- Sticky Sidebar -->
    <div class="sticky-sidebar">
        <h3>Course Details</h3>
        <table>
            <tr>
                <th>Duration</th>
                <td>3 Months</td>
            </tr>
            <tr>
                <th>Fees</th>
                <td>$599</td>
            </tr>
            <tr>
                <th>Level</th>
                <td>Beginner to Advanced</td>
            </tr>
        </table>
        <button style="width: 100%; padding: 15px; background: #007bff; color: #fff;">Enroll Now</button>
    </div>
</div>
            `;
            break;
            case 'seo-training':
            contentSection.innerHTML = `
                                          <div class="container" id="content">
    <!-- Main Content -->
    <div class="main-content">
        <h1>Seo Training</h1>
        <img src="https://via.placeholder.com/800x400" alt="Course Banner" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">

        <!-- Tabs -->
        <div class="tabs">
            <div class="tab active" data-target="#overview">Overview</div>
            <div class="tab" data-target="#curriculum">Curriculum</div>
            <div class="tab" data-target="#faqs">FAQs</div>
        </div>

        <!-- Tab Content -->
        <div id="overview" class="tab-content active">
            <h2>Course Overview</h2>
            <p>This course provides a comprehensive guide to mastering data science. Whether you’re a beginner or looking to enhance your skills, this course has everything you need to excel in data science.</p>
            <h3>Benefits of the Course:</h3>
            <ul>
                <li>In-depth data analytics</li>
                <li>Expert-led data reserach Marketing sessions</li>
                <li>Hands-onprojects</li>
                <li>Content data and  planning</li>
            </ul>
        </div>

        <div id="curriculum" class="tab-content">
            <h2>Course Curriculum</h2>
            <div class="accordion">
                <div class="accordion-header">Module 1: Introduction to Digital Marketing</div>
                <div class="accordion-content">
                    <ol>
                        <li>Understanding the data Landscape</li>
                        <li>data Channels Overview</li>
                        <li>Setting Up Your Online Presence</li>
                    </ol>
                </div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Module 2: Data Science</div>
                <div class="accordion-content">
                    <ol>
                        <li>Keyword Research Techniques</li>
                        <li>On-Page and Off-Page SEO</li>
                        <li>Creating a Content Strategy</li>
                    </ol>
                </div>
            </div>
        </div>

        <div id="faqs" class="tab-content">
            <h2>Frequently Asked Questions</h2>
            <div class="accordion">
                <div class="accordion-header">What is the duration of the course?</div>
                <div class="accordion-content">The course duration is 3 months, with flexible learning options.</div>
            </div>
            <div class="accordion">
                <div class="accordion-header">Are there any prerequisites?</div>
                <div class="accordion-content">No prerequisites are required. This course is designed for beginners.</div>
            </div>
        </div>
    </div>

    <!-- Sticky Sidebar -->
    <div class="sticky-sidebar">
        <h3>Course Details</h3>
        <table>
            <tr>
                <th>Duration</th>
                <td>3 Months</td>
            </tr>
            <tr>
                <th>Fees</th>
                <td>$599</td>
            </tr>
            <tr>
                <th>Level</th>
                <td>Beginner to Advanced</td>
            </tr>
        </table>
        <button style="width: 100%; padding: 15px; background: #007bff; color: #fff;">Enroll Now</button>
    </div>
</div>
            `;
            break;
            default:
                contentSection.innerHTML = '<p>Page not found.</p>';
}

    // Close the navbar after loading content
    navLinks.classList.remove('active');
}

// Event Listeners for Hamburger Menu
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.getElementById('web-development').addEventListener('click', () => loadContent('web-development'));
document.getElementById('digital-marketing').addEventListener('click', () => loadContent('digital-marketing'));
document.getElementById('data-science').addEventListener('click', () => loadContent('data-science'));
document.getElementById('graphic-design').addEventListener('click', () => loadContent('graphic-design'));
document.getElementById('seo-training').addEventListener('click', () => loadContent('seo-training'));
