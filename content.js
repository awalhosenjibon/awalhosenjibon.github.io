// নতুন নোটিশ যোগ করতে নিচের তালিকায় একটি নতুন লাইন কপি করে তথ্য বদলাও।
const notices = [
  { title: "ভর্তি বিজ্ঞপ্তি (নমুনা)", date: "তারিখ যোগ করুন", file: "#" },
  { title: "বার্ষিক পরীক্ষার রুটিন (নমুনা)", date: "তারিখ যোগ করুন", file: "#" },
  { title: "বিদ্যালয়ের ছুটির বিজ্ঞপ্তি (নমুনা)", date: "তারিখ যোগ করুন", file: "#" },
  { title: "উপবৃত্তি সংক্রান্ত বিজ্ঞপ্তি (নমুনা)", date: "তারিখ যোগ করুন", file: "#" }
];

const list = document.getElementById("notice-list");
notices.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = item.file;
  a.textContent = "📄 " + item.title;
  const date = document.createElement("span");
  date.className = "notice-date";
  date.textContent = item.date;
  li.append(a, date);
  list.appendChild(li);
});