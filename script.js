const timeContainer = document.querySelector(".current-time p span");

const updateTime = () => {
	timeContainer.textContent = Date.now();
};

updateTime()
setInterval(updateTime, 1000);
