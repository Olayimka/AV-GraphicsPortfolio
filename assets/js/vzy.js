function onLoad() {
    // *************************************************
    // from Dosunmu
    // function to show menu
    var openMenu = document.querySelector(".menu-icon #mobileHam");
    openMenu?.addEventListener("click", function () {
        document.body.style.overflowY = "hidden";
        document.querySelector(".mobile-nav-overlay").classList.add("open");
    });

    // function to hide menu
    var closeMenu = document.querySelector(".close-icon");
    closeMenu?.addEventListener("click", function () {
        document.body.style.overflowY = "scroll";
        document.querySelector(".mobile-nav-overlay").classList.remove("open");
    });

    document.querySelector(".mobile-nav-overlay")?.addEventListener("click", (e) => {
        if (e.target.classList.contains("mobile-nav-overlay")) {
            e.target.classList.remove("open");
            document.body.style.overflowY = "scroll";
        }
    });

    // static header animation desktop
    // let newScrollPosition = 0;
    // let lastScrollPosition;
    // let currentPosition = window.pageYOffset;

    // let header = document.querySelector(".header-animation");

    // window.addEventListener("scroll", () => {
    //     lastScrollPosition = window.scrollY;

    //     if (newScrollPosition < lastScrollPosition && lastScrollPosition > 80) {
    //         header.classList.remove("slideDown");
    //         header.classList.add("slideUp");
    //     } else if (newScrollPosition > lastScrollPosition) {
    //         header.classList.remove("slideUp");
    //         header.classList.add("slideDown");
    //     }
    //     newScrollPosition = lastScrollPosition;
    // });

    // static header animation mobile
    // let mobileNewScrollPosition = 0;
    // let mobileLastScrollPosition;
    // let mobileCurrentPosition = window.pageYOffset;

    // let mobileHeader = document.querySelector(".mobile-header-animation");

    // window.addEventListener("scroll", () => {
    //     mobileLastScrollPosition = window.scrollY;

    //     if (mobileNewScrollPosition < mobileLastScrollPosition && mobileLastScrollPosition > 80) {
    //         mobileHeader.classList.remove("slideDown");
    //         mobileHeader.classList.add("slideUp");
    //     } else if (mobileNewScrollPosition > mobileLastScrollPosition) {
    //         mobileHeader.classList.remove("slideUp");
    //         mobileHeader.classList.add("slideDown");
    //     }
    //     mobileNewScrollPosition = mobileLastScrollPosition;
    // });

    // *************************************************
    const vzyIcon = document.getElementById("vzy-icon");
    const vzyMenu = document.getElementById("vzy-menu");
    const shareBox = document.getElementById("share-box");
    // const shareBox_backdrop = shareBox.firstChild
    const shareTo = document.getElementById("share-to");
    const copyIcon = document.querySelector(".copy-icon");
    const checkmarkIcon = document.querySelector(".checkmark-icon");

    const toggleVzyMenu = () => {
        vzyMenu.classList.toggle("active");
    };
    const toggleshareBox = () => {
        shareBox.classList.toggle("active");
    };
    vzyIcon?.addEventListener("click", () => {
        toggleVzyMenu();
        shareBox.classList.remove("active");
    });
    vzyMenu?.addEventListener("click", toggleVzyMenu);
    shareTo?.addEventListener("click", () => {
        toggleshareBox();
        prepForShare();
    });
    // shareBox_backdrop.addEventListener('click',()=>{toggleshareBox()})

    const switchTheme = (e) => {
        let theme = document.documentElement.getAttribute("data-theme");
        console.log("before theme");
        console.log(theme);
        if (theme === "light") {
            theme = "dark";
        } else {
            theme = "light";
        }
        console.log("after theme");
        console.log(theme);
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        toggleTheme(theme);
    };
    const ThemeButtons = document.querySelectorAll(".theme-btn");
    ThemeButtons.forEach((tB) => {
        tB.addEventListener("click", switchTheme, false);
    });

    const darkModeBtn = document.querySelectorAll(".dark-mode");
    const lightModeBtn = document.querySelectorAll(".light-mode");

    darkModeBtn.forEach((btn) => {
        btn.addEventListener("click", switchTheme);
    });
    lightModeBtn.forEach((btn) => {
        btn.addEventListener("click", switchTheme);
    });

    const toggleTheme = (theme) => {
        if (theme === "light") {
            darkModeBtn.forEach((btn) => {
                btn.style.display = "block";
            });
            lightModeBtn.forEach((btn) => {
                btn.style.display = "none";
            });
        } else {
            darkModeBtn.forEach((btn) => {
                btn.style.display = "none";
            });
            lightModeBtn.forEach((btn) => {
                btn.style.display = "block";
            });
        }
    };

    const presetTheme = () => {
        let theme = localStorage.getItem("theme");
        if (!theme) {
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                theme = "dark";
            } else {
                theme = "light";
            }
        }
        toggleTheme(theme);
        console.log("the theme is " + theme);
        document.documentElement.setAttribute("data-theme", theme);
    };
    presetTheme();

    const prepForShare = () => {
        const pageTitle = document.getElementById("pageName");
        pageTitle.innerText = " " + document.title;
        let url = window.location.href.split("://")[1];
        const twitterBtn = document.getElementById("twitter-share");
        twitterBtn.setAttribute("href", `https://twitter.com/intent/tweet?url=${url}&text=`);
        const whatsappBtn = document.getElementById("whatsapp-share");
        whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${url}`);
        const facebookBtn = document.getElementById("facebook-share");
        facebookBtn.setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${url}`);
        const linkedinBtn = document.getElementById("linkedin-share");
        linkedinBtn.setAttribute("href", `https://www.linkedin.com/shareArticle?mini=true&url=${url}`);

        const copied = document.getElementById("copied");
        const shareTextInput = document.getElementById("share-text-input");
        const shareTextBtn = document.getElementById("share-text-btn");
        shareTextInput.setAttribute("value", url);
        const copyToClipboard = () => {
            navigator.clipboard.writeText(url);
            copied.innerText = "Copied";
            copyIcon.style.display = "none";
            checkmarkIcon.style.display = "block";
            setTimeout(() => {
                copyIcon.style.display = "block";
                checkmarkIcon.style.display = "none";
                copied.innerText = "";
            }, 3000);
        };
        shareTextInput.addEventListener("click", copyToClipboard);
        // shareTextBtn.addEventListener('click', copyToClipboard)
    };

    const getValues = (arr) => {
        console.log(arr);
        let res = {};
        for (let x = 0; x < arr.length; x++) {
            const element = arr[x];
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                if (element.name) {
                    res[element.name] = element.value;
                }
            }
        }
        return res;
    };

    // let errorText = document.getElementById('error')
    // let feedbackText = document.getElementById('feedback')
    const emailRegex = RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");
    const subscribe = async (e) => {
        let errorText = e.target.parentElement.querySelector("#error");
        let feedbackMessageText =
            e.target.parentElement.querySelector("form").dataset.form == "more-input"
                ? e.target.parentElement.querySelector("#feedbackMessage2")
                : e.target.parentElement.querySelector("#feedbackMessage");
        let feedbackText = e.target.parentElement.querySelector("#feedback");

        feedbackMessageText.style.display = "none";
        e.preventDefault();
        try {
            let siteUrl = document.getElementById("siteUrl").getAttribute("data-siteUrl");
            let body = getValues(e.target.elements);
            if (!emailRegex.test(body.email)) {
                feedbackMessageText.innerText = "Enter a valid email";
                feedbackMessageText.style.display = "block";
                return false;
            }
            if (typeof body.phone == "string" && body.phone == "") {
                feedbackMessageText.innerText = "Enter a valid phone number";
                feedbackMessageText.style.display = "block";
                return false;
            }
            // console.log(body);
            let vals = Object.entries(body);
            let err = false;
            vals.forEach((v) => {
                if (v[1] === "") {
                    feedbackMessageText.innerText = "Please enter your details";
                    feedbackMessageText.style.display = "block";
                    err = true;
                    return false;
                }
            });
            if (err) {
                return false;
            }
            // console.log(body)
            // let res = await fetch('http://localhost:8001/sites/contacts/'+siteUrl, {
            // let res = await fetch('https://backend.vzy.co/sites/contacts/' + siteUrl, {
            // let res = await fetch("http://localhost:8001/sites/contacts/" + siteUrl, {
            // let res = await fetch(`${import.meta.env.VITE_BASE_URL}sites/contacts/` + siteUrl, {
            // let res = await fetch(`${process.env.VITE_BASE_URL}/sites/contacts/` + siteUrl, {
            let res = await fetch(`https://staging-server.vzy.co/sites/contacts/` + siteUrl, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            // console.log(res);
            if (res.status == 200) {
                feedbackText.innerText = "Thank you! Your submission has been received";
                feedbackText.style.display = "block";
                e.target.reset();
                e.target.style.display = "none";
            } else {
                errorText.innerText = "An error occurred. Please try again later.";
                errorText.style.display = "block";
            }
        } catch (err) {
            console.log(err);
        }
    };
    const subscribeForms = document.querySelectorAll(".subscribe");
    subscribeForms.forEach((tB) => {
        tB.addEventListener("submit", subscribe);
    });

    // window.onload = () => {
    setTimeout(() => {
        let preloader = document.getElementById("preloader");
        preloader?.classList.toggle("done");
        setTimeout(() => {
            if (preloader) {
                preloader.style.display = "none";
            }
        }, 1500);
    }, 1000);
    // } //hide preloader

    function parseSrcToIframe() {
        const iframes = document.querySelectorAll(".iframe");
        iframes.forEach((iframe) => {
            iframe.setAttribute("src", iframe.getAttribute("data-src"));
        });
    }

    parseSrcToIframe();

    function showVideo(e) {
        console.log("Q");
        let videoId = e.currentTarget.getAttribute("data-videoId");
        let video_container = document.getElementById("video-container_" + videoId);
        let video = video_container.getAttribute("data-src").replace("?autoplay=0", "?autoplay=1&mute=1");

        let video_player = document.createElement("iframe");
        video_player.src = video;
        video_player.allow = "autoplay";
        video_player.allowfullscreen = "";
        video_player.width = "100%";
        video_player.height = "100%";
        video_player.frameborder = "0";
        video_container.appendChild(video_player);
        video_container.parentElement.parentElement.parentElement.style.display = "block";
    }

    function playAudio(e) {
        const videoUrl = e.target.parentElement
            .querySelector("iframe")
            .getAttribute("data-src")
            .replace("?autoplay=0", "?autoplay=1")
            .replace("controls=0", "controls=1")
            .replace("mute=1&", "");

        e.target.parentElement.querySelector("iframe").setAttribute("src", videoUrl);
        e.target.style.opacity = 0;
        e.target.addEventListener("transitionend", () => {
            e.target.style.display = "none";
        });
    }

    const playButtons = document.querySelectorAll(".play-video-icon");
    playButtons.forEach((pB) => {
        // pB.addEventListener("click", showVideo);π
        pB.addEventListener("click", playAudio);
    });

    function hideVideo(e) {
        let parent = e.currentTarget.classList.contains("lightbox") ? e.currentTarget : e.currentTarget.parentElement;
        console.log(parent);
        parent.style.display = "none";
        parent.firstChild.firstChild.firstChild.firstChild.remove();
    }
    const closeIcons = document.querySelectorAll(".close-video-icon");
    const videoLightbox = document.querySelectorAll(".lightbox");
    closeIcons.forEach((pB) => {
        pB.addEventListener("click", hideVideo, false);
    });
    videoLightbox.forEach((elem) => {
        elem.addEventListener("click", hideVideo, false);
    });

    // function to close announcement bar
    function hideAnnouncementBarBlock() {
        const announcementBar = document.querySelector(".announcement-bar-block");
        announcementBar.style.display = "none";
    }
    // let announcementCloseButton = document.getElementById('announcement-close-button');
    // announcementCloseButton.addEventListener('click', hideAnnouncementBarBlock);

    function toggleAccordion(e) {
        // let accordion_items = e.currentTarget.parentElement.parentElement.children;
        let accordion_items = e.currentTarget.closest(".accordion-item").parentElement.children;
        let accordion_length = accordion_items.length;

        for (let x = 0; x < accordion_length; x++) {
            let accordion = accordion_items[x];
            if (
                e.currentTarget.closest(".accordion-item").dataset.index !==
                accordion.children[0].parentElement.dataset.index
            ) {
                if (e.currentTarget.closest(".accordion-item").dataset.icontype === "plus") {
                    accordion.children[0].querySelector("#plus").style.display = "block";
                    accordion.children[0].querySelector("#minus").style.display = "none";
                }
                accordion.children[0].classList.remove("active");
                accordion.children[1].classList.remove("active");
            }
        }

        // e.currentTarget.classList.toggle("active");
        // e.currentTarget.nextElementSibling.classList.toggle("active");

        if (e.target.closest(".accordion-item")) {
            e.target.classList.toggle("active");
            e.target.parentElement.classList.toggle("active");
            if (e.target.nextElementSibling) e.target.nextElementSibling.classList.toggle("active");
        }

        if (e.target.closest(".accordion-item").dataset.icontype === "plus" && e.target.classList.contains("active")) {
            e.target.closest(".accordion-item").querySelector("#minus").style.display = "block";
            e.target.closest(".accordion-item").querySelector("#plus").style.display = "none";
        } else if (e.target.closest(".accordion-item").dataset.icontype === "plus") {
            e.target.closest(".accordion-item").querySelector("#minus").style.display = "none";
            e.target.closest(".accordion-item").querySelector("#plus").style.display = "block";
        }
    }

    // let accordion_buttons = document.querySelectorAll('.accordion-header')
    let accordion_buttons = document.querySelectorAll(".accordion-item");
    accordion_buttons.forEach((button) => button.addEventListener("click", toggleAccordion));

    function lazyLoad() {
        var lazyloadImages;
        videos = document.querySelectorAll("video");
        if (videos) {
            videos.forEach((video) => {
                if (video.dataset.src) {
                    console.log("hello world");
                    video.src = image.dataset.src;
                    video.classList.remove("lazy");
                }
            });
        }
        if ("IntersectionObserver" in window) {
            lazyloadImages = document.querySelectorAll("img");
            // lazyloadImages = document.getElementsByTagName("img")
            var imageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        if (image.dataset.src) {
                            image.src = image.dataset.src;
                            image.classList.remove("lazy");
                            imageObserver.unobserve(image);
                        }
                    }
                });
            });

            lazyloadImages.forEach(function (image) {
                imageObserver.observe(image);
            });
        } else {
            var lazyloadThrottleTimeout;
            lazyloadImages = document.querySelectorAll("img");
            //lazyloadImages = document.querySelectorAll("img");
            // lazyloadImages = document.getElementsByTagName("img")

            function lazyload() {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }

                lazyloadThrottleTimeout = setTimeout(function () {
                    var scrollTop = window.pageYOffset;
                    lazyloadImages.forEach(function (img) {
                        if (img.offsetTop < window.innerHeight + scrollTop) {
                            img.src = img.dataset.src;
                            img.classList.remove("lazy");
                        }
                    });
                    if (lazyloadImages.length == 0) {
                        document.removeEventListener("scroll", lazyload);
                        window.removeEventListener("resize", lazyload);
                        window.removeEventListener("orientationChange", lazyload);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyload);
            window.addEventListener("resize", lazyload);
            window.addEventListener("orientationChange", lazyload);
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        lazyLoad();
    });

    // function resizeElementBasedOnWindow() {
    //     const elements = document.querySelectorAll(".subtitle-width-size");
    //     elements.forEach((elem) => {
    //         let windowWidth = window.innerWidth;
    //         if (windowWidth < 756) {
    //             elem.style.width = "100%";
    //         } else {
    //             elem.style.width = elem.dataset.size + "%";
    //         }
    //     });
    // }

    // resizeElementBasedOnWindow();
    // window.addEventListener("resize", resizeElementBasedOnWindow);

    function headerAnimation() {
        // static header animation desktop
        let newScrollPosition = 0;
        let lastScrollPosition;
        let currentPosition = window.pageYOffset;

        let header = document.querySelector(".header-animation");
        const banner = document.querySelector(".banner-box");

        if (header) {
            banner.style.marginTop = header.offsetHeight + "px";
            window.addEventListener("scroll", () => {
                // document.querySelector(".mobile-nav-overlay").classList.remove("open");
                lastScrollPosition = window.scrollY;

                // if (newScrollPosition < lastScrollPosition && lastScrollPosition > 80) {
                //     header.classList.remove("slideDown");
                //     header.classList.add("slideUp");
                // } else if (newScrollPosition > lastScrollPosition) {
                //     header.classList.remove("slideUp");
                //     header.classList.add("slideDown");
                // }
                // newScrollPosition = lastScrollPosition;
            });
        }
    }

    headerAnimation();
    // for phone input
    const countryData = window.intlTelInputGlobals.getCountryData();
    let iti_input = document.createElement("input");
    let iti_input_container = document.createElement("div");
    iti_input_container.append(iti_input);
    let iti = window.intlTelInput(iti_input, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        initialCountry: "auto",
        geoIpLookup: (callback) => {
            fetch("https://ipapi.co/json")
                .then((res) => res.json())
                .then((data) => callback(data.country_code))
                .catch(() => callback("us"));
        },
    });

    function validateNumber(e) {
        try {
            let phoneNumber = e.value;
            let country_selector = e.parentElement.querySelector(".country-selector");
            let dialcode = country_selector.dataset.dialcode;
            let country = country_selector.dataset.country;

            iti.setNumber("+" + dialcode + phoneNumber);
            iti.setCountry(country);
            // console.log(e.parentElement.querySelector('.phone-number-data'))
            if (iti.isValidNumber()) {
                console.log("valid");
                e.setAttribute("data-valid", true);
                e.parentElement.querySelector(".phone-number-data").value = "+" + dialcode + phoneNumber;
            } else {
                console.log("invalid");
                e.setAttribute("data-valid", false);
                e.parentElement.querySelector(".phone-number-data").value = "";
            }
            console.log(e.parentElement.querySelector(".phone-number-data").value);
        } catch (err) {
            e.setAttribute("data-valid", false);
            // console.log(e.parentElement.querySelector('.phone-number-data').value + ' err')
            // console.log(err);
        }
    }

    function filterFunction(e) {
        let input = e;
        let filter = input.value.toUpperCase();
        let a = e.parentElement.querySelector("ul").querySelectorAll("li");
        for (let i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    document.querySelectorAll(".tel-input").forEach((t_i) => {
        let country_selector = t_i.querySelector(".country-selector");
        fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => setDropDownData(data.country_code))
            .catch(() => setDropDownData("us"));
        country_selector.addEventListener("click", (e) => {
            country_selector.parentElement.querySelector(".num-drop-down").classList.toggle("active");
            // iti.setCountry
        });
        let filter_input = t_i.querySelector(".num-drop-down");
        filter_input.value = "";
        filter_input.addEventListener("keyup", (e) => filterFunction(e.target));
        let ul = t_i.querySelector(".num-drop-down").querySelector("ul");
        function setDropDownData(countryCode) {
            for (let i = 0; i < countryData.length; i++) {
                const country = countryData[i];
                const optionNode = document.createElement("li");
                optionNode.setAttribute("data-dialcode", country.dialCode);
                optionNode.setAttribute("data-country", country.iso2);
                const textNode = document.createTextNode(country.name + " +" + country.dialCode);
                optionNode.appendChild(textNode);
                ul.appendChild(optionNode);
                if (countryCode.toLowerCase() == country.iso2) {
                    country_selector.innerText = "+" + country.dialCode;
                    country_selector.setAttribute("data-dialcode", country.dialCode);
                    country_selector.setAttribute("data-country", country.iso2);
                }
            }
        }

        let number_input = t_i.querySelector(".number-input");
        number_input.addEventListener("keyup", (e) => validateNumber(e.target));

        // close function for backdrop
        let backdrop = t_i.querySelector(".num-drop-down").querySelector(".screen");
        backdrop.addEventListener("click", () => {
            // console.log('..')
            country_selector.parentElement.querySelector(".num-drop-down").classList.remove("active");
        });
    });

    function selectNumCode(e) {
        let text = e.target.innerText;

        let dialcode = e.target.dataset.dialcode;
        let country = e.target.dataset.country;

        let country_selector = e.target.parentElement.parentElement.parentElement.querySelector(".country-selector");
        country_selector.innerText = "+" + dialcode;
        country_selector.setAttribute("data-dialcode", dialcode);
        country_selector.setAttribute("data-country", country);
        e.target.parentElement.parentElement.classList.toggle("active");
        // e.target.parentElement.parentElement.querySelector(".filter-input").value = ""
    }
    let num_drop_down = document.querySelector(".num-drop-down"); //.getElementsByTagName('li')
    if (num_drop_down)
        num_drop_down.addEventListener("click", (e) => {
            if (e.target.nodeName == "LI") {
                selectNumCode(e);
            }
        });
}
let submit_page_password_btn = document.getElementById("submit-page-password-btn");
submit_page_password_btn?.addEventListener("click", (ev) => {
    try {
        let userInput = document.getElementById("submit-page-password-input").value;
        let encryptedPage = document.getElementById("encryptedPage").getAttribute("data-data");
        let decryptedPage = CryptoJS.AES.decrypt(encryptedPage, userInput).toString(CryptoJS.enc.Utf8);
        decryptedPage = decryptedPage.replace(/<!--[\s\S]*?-->/g, "");
        // console.log(decryptedPage);
        if (decryptedPage.startsWith("<")) {
            document.querySelector(".container").insertAdjacentHTML("beforeend", decryptedPage);
            onLoad();
            document.getElementById("password-modal").remove();
        }
    } catch (error) {
        console.log(error);
        alert("wrong password");
    }

    // console.log(userInput)
    // if(password==userInput){
    //     let password_modal = document.getElementById('password-modal');
    //     password_modal.style.visibility='hidden'
    // }
});
onLoad();

const UIDurationBtns = document.querySelector("#duration-btns");
const UIMonthlyPlanBtn = document.querySelector("#monthly-plan-btn");
const UIYearlyPlanBtn = document.querySelector("#yearly-plan-btn");
const UITier = document.querySelectorAll(".tier");

if (UIDurationBtns) {
    function changePlans(e) {
        const duration = this.duration;

        if (e.target.id === "monthly-plan-btn") {
            e.target.classList.add("active");
            e.target.nextElementSibling.classList.remove("active");
        } else {
            e.target.classList.add("active");
            e.target.previousElementSibling.classList.remove("active");
        }

        Array.from(UITier).forEach((tier, index) => {
            const UIAmount = tier.querySelector(".amount");
            const UIPeriod = tier.querySelector(".period");

            const componentData = JSON.parse(UIDurationBtns.getAttribute("data-component"));

            console.log("componentData", componentData);

            UIAmount.innerText = `${componentData.symbol}${componentData.prices[index].amountPlans[duration + "ly"]}`;

            UIPeriod.innerText = `/${duration}`;
            const br = document.createElement("br");
            UIPeriod.appendChild(br);
            // UIPeriod.innerText += "start today";
        });
    }

    UIMonthlyPlanBtn.addEventListener("click", changePlans.bind({duration: "month"}));
    UIYearlyPlanBtn.addEventListener("click", changePlans.bind({duration: "year"}));
}

const videoSectionBackground = document.querySelectorAll(".video-section-background");

if (videoSectionBackground) {
    Array.from(videoSectionBackground).forEach((video) => {
        const parentElement = video.parentElement.parentElement;

        const listHeight = Math.ceil(parentElement.clientHeight / 3);
        const videoHeight = Math.ceil(video.videoHeight / 3);
        const size = Math.abs(listHeight - videoHeight);

        switch (video.dataset.position) {
            case "top":
                video.style.top = 0;
                break;
            case "center":
                video.style.top = -size + "%";
                break;
            case "bottom":
                video.style.top = -(size * 2) + "%";
        }
    });
}

const countrySearchUIs = document.querySelectorAll(".country-search");
// const hostUrl = document.querySelector("#hostUrl").dataset.hosturl;

function createListItem(text, className = "", dataset = {name: "", value: ""}) {
    let li = document.createElement("li");
    if (className) li.className = className;
    if (dataset.name) li.setAttribute(`data-${dataset.name}`, dataset.value);
    li.textContent = text;
    return li;
}

countrySearchUIs.forEach(async (ui) => {
    const dropdownButton = ui.querySelector(".btn");

    let countries = countriesJson;

    // await fetch(`${hostUrl}/assets/js/allCountries.json`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         countries = data;
    //     })
    //     .catch((error) => console.log(error));

    let filteredCountries = countries;

    function listCountries() {
        filteredCountries.forEach((country, index) => {
            ui.querySelector(".country-list").appendChild(
                createListItem(`${country.flag} ${country.countryName} ${country.telephone_code}`, "list", {
                    name: "country",
                    value: `${country.flag} ${country.telephone_code}`,
                })
            );
        });
    }

    ui.querySelector(".blur-body").addEventListener("input", (e) => {
        ui.querySelector(".country-list").innerHTML = "";
        filteredCountries = countries.filter((country) => {
            return country.countryName.toLowerCase().includes(e.target.value.toLowerCase());
        });
        listCountries();
    });

    listCountries();

    ui.querySelector(".country-list").addEventListener("click", (e) => {
        if (e.target.classList.contains("list")) {
            dropdownButton.querySelector("span").innerText = e.target.dataset.country;
            ui.querySelector(".page-list").classList.toggle("display-none");
        }
    });

    let backdrop = ui.querySelector(".screen");

    backdrop.addEventListener("click", () => {
        ui.querySelector(".page-list").classList.add("display-none");
    });

    dropdownButton.addEventListener("click", (e) => {
        ui.querySelector(".page-list").classList.toggle("display-none");
    });
});
