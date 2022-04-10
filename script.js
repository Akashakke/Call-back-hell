let words = document.querySelectorAll(".word");

	const animateAll = (animate) => {
		setTimeout(() => {
			animate(words[0]);
			setTimeout(() => {
				animate(words[1]);
        setTimeout(() => {
				animate(words[2]);
				setTimeout(() => {
					animate(words[3]);
        setTimeout(() => {
					animate(words[4]);
        setTimeout(() => {
					animate(words[5]);
        setTimeout(() => {
					animate(words[6]);
        setTimeout(() => {
					animate(words[7]);
        setTimeout(() => {
					animate(words[8]);
        setTimeout(() => {
					animate(words[9]);
        setTimeout(() => {
					animate(words[10]);
        setTimeout(() => {
					animate(words[11]);
        setTimeout(() => {
					animate(words[12]);
            }, 1000)
            }, 1000)
         }, 1000)
        }, 1000)
       }, 1000)
     }, 1000)
    }, 1000)
   }, 1000)
   }, 1000)
				}, 1000)
      }, 1000)
			}, 1000)
		}, 1000)
	}

	const animate = (word) => {
		word.classList.add("animate");
	}

	animateAll(animate);