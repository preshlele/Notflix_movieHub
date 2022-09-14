import React from 'react'

const btn__burger = document.getElementById("btn-burger");
const menu__mobile = document.getElementById("menu-mobile");
const svg__content = document.getElementById("svg-content");
var status__icon = true;

const icon__close =
  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
const icon__open =
  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';

btn__burger.onClick = function () {
  menu__mobile.classList.toggle("hidden");
  menu__mobile.classList.toggle("transform");
  if (status__icon) {
    svg__content.innerHTML = icon__close;
    status__icon = false;
  } else {
    svg__content.innerHTML = icon__open;
    status__icon = true;
  }
};

const ResponsiveHeader = () => {
  return (
    <>
      <div class="bg-indigo-900 p-4 gap-4 justify-between text-white flex">
        <div class="text-2xl" href="">
          Site
        </div>
        <div class="lg:flex hidden">
          <ul class="flex flex-row gap-4">
            <li>
              <div class="bg-pink-600 p-4 rounded-md" href="">
                Home
              </div>
            </li>
            <li>
              <div class="bg-pink-600 p-4 rounded-md" href="">
                Services
              </div>
            </li>
            <li>
              <div class="bg-pink-600 p-4 rounded-md" href="">
                Contact
              </div>
            </li>
          </ul>
        </div>
        <button id="btn-burger" class="lg:hidden flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg-content"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div id="menu-mobile" class="text-white hidden lg:hidden">
        <ul class="flex flex-col divide-y divide-blue-100">
          <li>
            <div class="bg-pink-600 p-4 flex" href="">
              Home
            </div>
          </li>
          <li>
            <div class="bg-pink-600 p-4 flex" href="">
              Services
            </div>
          </li>
          <li>
            <div class="bg-pink-600 p-4 flex" href="">
              Contact
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ResponsiveHeader