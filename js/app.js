window.onload = function() {
	  var link = document.getElementById("dynamic-link");
	
	  function adjustContent() {
	    if (window.innerWidth < 1200) {
	      link.textContent = "Уход для тела и лица";
	      link.setAttribute("href", "#новая-ссылка"); // заменяем href на новую ссылку
	    } else {
	      link.textContent = "Уход для тела";
	      link.setAttribute("href", "#старая-ссылка"); // возвращаем исходную ссылку
	    }
	  }
	
	  window.onresize = function() {
	    adjustContent();
	  };
	
	  // вызываем для первоначальных значений
	  adjustContent();
	};

