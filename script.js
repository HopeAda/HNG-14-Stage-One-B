const timeContainer = document.querySelector(".current-time p span");

const updateTime = () => {
	timeContainer.textContent = Date.now();
};

setInterval(updateTime, 1000);
