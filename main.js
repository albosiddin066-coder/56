const containerList = document.getElementById("containerList");
const form = document.getElementById("form");
const addName = document.getElementById("addName");
const addNum = document.getElementById("addNum");
const addBtn = document.getElementById("addBtn");

const api = "https://69ba8015b3dcf7e0b4bd2828.mockapi.io/students";

async function getStudents() {
    try {
        const res = await fetch(api, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        });
        const data = await res.json();

        data.forEach((student) => {
            containerList.innerHTML += `
        <div class="flex items-center gap-10 max-[558px]:gap-5">
          <img class="w-full max-w-[50px]" src="./img/Ellipse 21.png" alt="" />

          <div
            class="flex justify-between items-center flex-1 border-b border-[#B9B9B9] pb-4"
          >
            <div>
              <p class="text-xl pb-1">${student.name}</p>
              <p class="text-gray-400 text-sm">${student.number}/${student.surname}</p>
            </div>

            <div class="flex gap-6">
              <i class="fa-regular fa-pen-to-square min-[400px]:text-xl cursor-pointer"></i>
              <i
                class="fa-regular fa-trash-can min-[400px]:text-xl text-red-500 cursor-pointer"
              ></i>
            </div>
          </div>
        </div> 
      `;
        });

        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = addName.value;
    const num = addNum.value;

    containerList.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="flex items-center gap-10">
        <img class="w-full max-w-[50px]" src="./img/Ellipse 21.png" alt="" />
  
        <div
          class="flex justify-between items-center flex-1 border-b border-[#B9B9B9] pb-4"
        >
          <div>
            <p class="text-xl pb-1">${name}</p>
            <p class="text-gray-400 text-sm">${num}/Username</p>
          </div>
  
          <div class="flex gap-6">
            <i class="fa-regular fa-pen-to-square text-xl cursor-pointer"></i>
            <i
              class="fa-regular fa-trash-can text-xl text-red-500 cursor-pointer"
            ></i>
          </div>
        </div>
      </div> 
    `,
    );

    addName.value = "";
    addNum.value = "";
});

getStudents();
