document.addEventListener('DOMContentLoaded', () => {
    fetchCourses();
    fetchBlogs();
});

function fetchCourses() {
    fetch('http://localhost:5000/courses')
        .then(response => response.json())
        .then(data => {
            const courseList = document.getElementById('course-list');
            data.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('course');
                courseItem.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <p>Price: $${course.price} (Discount: ${course.discount}%)</p>
            <button onclick="purchaseCourse(${course.id})">Purchase</button>
          `;
                courseList.appendChild(courseItem);
            });
        });
}

function fetchBlogs() {
    fetch('http://localhost:5000/blogs')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            data.forEach(blog => {
                const blogItem = document.createElement('div');
                blogItem.classList.add('blog');
                blogItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content.substring(0, 100)}...</p>
            <p>Published on: ${new Date(blog.publish_date).toLocaleDateString()}</p>
          `;
                blogList.appendChild(blogItem);
            });
        });
}

function purchaseCourse(courseId) {
    const email = prompt('Enter your email for OTP verification');
    if (!email) return;

    fetch('http://localhost:5000/generate-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    })
        .then(response => response.json())
        .then(data => {
            const otp = prompt('Enter the OTP sent to your email');
            return fetch('http://localhost:5000/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
}
