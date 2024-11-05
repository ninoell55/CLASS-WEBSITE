// navbar responsive
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let close = document.querySelector(".navbar li a");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

navbar.onclick = () => {
  navbar.classList.remove("open");
  menu.classList.remove("bx-x");
};

// navbar position
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Open the lightbox and show the selected image
function openLightbox(imageSrc) {
  var lightbox = document.getElementById("bos");
  var lightboxImage = document.getElementById("bos-image");
  lightbox.style.display = "block";
  lightboxImage.src = imageSrc;
}

// Close the lightbox
function closeLightbox() {
  var lightbox = document.getElementById("bos");
  lightbox.style.display = "none";
}

// absen siswa

document.addEventListener("DOMContentLoaded", () => {
  const students = [
    "Abdul Mughni Nugraha",
    "Ahmad Fathan Aroyan",
    "Amelia Agustin",
    "Ammar Nur Faishol",
    "Arya Milito",
    "Athallah Asyarif Khoirulinsan",
    "Chiara Dewi Chatlina",
    "Diyana Putri Ramadhan",
    "Fathan Aprian",
    "Ferdy Pratama Suradi",
    "Indah Nuraisyah",
    "Jihan Riesty Aprilia",
    "Jihan Syahira",
    "Kayndra Nur Faiq",
    "Melani Detiani",
    "Melina Detiana",
    "Mochamad Bintang Laksamana Sumardi",
    "Mohammad Ridho Oktoberyl Nugraha",
    "Muhaimin",
    "Nafisah Adelia Putri",
    "Nino Adityo Nugroho",
    "Noval Maulana",
    "Novvalino Putra Gianto",
    "Nur Fajrina Ramadhan",
    "Okta Putri Syllawati Hassan",
    "Prima Al Rasyid Irawan",
    "Puji Wijayanto",
    "Radhitya Rizki Ramadhan",
    "Saefudin Putra Maghfiroti",
    "Sarif Hidayat",
    "Sindi Maulidiya",
    "Syafa Inesya",
    "Syilla Mulya Ramadhan",
    "Tiara Afpacila",
    "Vetri Putri Rantika",
  ];

  const tableBody = document.querySelector("#attendanceTable tbody");

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student}</td>
          <td><input type="checkbox" name="attendance" value="Hadir-${student}"></td>
          <td><input type="checkbox" name="attendance" value="Izin-${student}"></td>
          <td><input type="checkbox" name="attendance" value="Sakit-${student}"></td>
          <td><input type="checkbox" name="attendance" value="Alpa-${student}"></td>
      `;
    tableBody.appendChild(row);
  });
});

function submitAttendance() {
  const checkboxes = document.querySelectorAll(
    'input[name="attendance"]:checked'
  );
  const attendance = {
    hadir: [],
    izin: [],
    sakit: [],
    alpa: [],
  };

  checkboxes.forEach((checkbox) => {
    const [status, student] = checkbox.value.split("-");
    attendance[status.toLowerCase()].push(student);
  });

  alert(
    `Siswa yang hadir: ${attendance.hadir.join(", ")}\n` +
      `Siswa yang izin: ${attendance.izin.join(", ")}\n` +
      `Siswa yang sakit: ${attendance.sakit.join(", ")}\n` +
      `Siswa yang alpa: ${attendance.alpa.join(", ")}`
  );
}