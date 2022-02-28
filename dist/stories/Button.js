
export const createButton = ({
  hollow = false,
  size = 'small',
  label,
  onClick,
  background = 'light',
}) => {
  const btn = document.createElement('button');
  let btnPadding;

  btn.type = 'button';
  btn.innerText = label;
  btn.ariaLabel = label;
  btn.tabIndex = "0";
  btn.ariaRoleDescription = "button"
  btn.ariaPressed = "false"
  btn.addEventListener('click', onClick);

  const isHollow = hollow ? 'bg-transparent' : 'bg-black';
  const textColor =  'text-white';
  const textWeight = 'font-medium';
  const isBorder =  hollow ? 'border-2 border-white' : 'border-2 border-black';
  const textSize = size == 'medium' ? 'text-base' : 'text-tiny';
  const borderRadius = size == 'medium' ? 'rounded-md' : 'rounded-sm';
  const onHover = hollow ?  'hover:bg-black hover:text-white hover:border-black' : 'hover:bg-white hover:text-black hover:border-white';
  const btnTransition = 'ease-in duration-300';

  const wrapper = document.createElement('div');
  const bgColor = background == 'light' ? 'white' : 'black'
  wrapper.style.backgroundColor = bgColor;
  wrapper.className = 'w-screen h-screen px-8 py-8';
  wrapper.appendChild(btn)


  switch(size){
    case 'small':
      btnPadding = 'py-3 px-7.5'
    break;
    case 'medium':
      btnPadding = 'py-3 px-21.75'
    break;
  }
  btn.className = `${isHollow} ${textWeight} ${isBorder} ${textSize} ${textColor} ${btnPadding} ${borderRadius} ${onHover} ${btnTransition}`;
  return wrapper;
};

export const createIcon = () =>{
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 5L19 12L12 19"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
}


export const createIconButton = ({
  label,
  onClick,
  background,
  hollow
}) => {
  const btn = document.createElement('button');
  btn.innerHTML = `<span>${label}</span>${createIcon()}`;
  btn.ariaLabel = label;
  btn.tabIndex = "0";
  btn.ariaRoleDescription = "button"
  btn.ariaPressed = "false"
  btn.addEventListener('click', onClick);

  const wrapper = document.createElement('div');
  const bgColor = background == 'light' ? 'white' : 'black';
  wrapper.style.backgroundColor = bgColor;
  wrapper.className = 'w-screen h-screen px-8 py-8';
  wrapper.appendChild(btn)


  btn.className = `text-white py-3 px-4 hover:text-black border-2 border-black bg-black hover:bg-transparent rounded-md flex flex-row w-full justify-between hover--svg max-w-66 transition--default`

  return wrapper;
}
