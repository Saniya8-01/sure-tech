import { allTeams } from './teams.js';
import { allCategory } from './category.js';

$(document).ready(function () {

    // carousel starts //
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    // carousel ends //

    let acc = $(".faq-qn-open-close");

    $("#open-sidebar").click(function () {
        if ($(".sidebar").css("display") === "none") {
            $(".sidebar").css("display", "flex");
        } else {
            $(".sidebar").css("display", "none");
        }       
    })    

    $(document).click(function (event) {
        if (!$(event.target).closest('.sidebar, #open-sidebar').length) {
            $(".sidebar").css("display", "none");
        }
    });

    $(".sidebar-close").click(function () {
        $(".sidebar").css("display", "none");
    })

    function changeButtonContent(buttonClass, imagePath) {
        $(buttonClass).html('<img src="' + imagePath + '" alt="icon">');
    }

    changeButtonContent('.slick-prev', '../../assets/icons/left-icon.svg');
    changeButtonContent('.slick-next', '../../assets/icons/right-icon.svg');

    acc.first().next().css("display", "flex").prev().find(".open-close-icon").html("-");

    acc.on("click", function () {

        acc.not(this).next().css("display", "none").prev().find(".open-close-icon").html("+");

        var panel = $(this).next();
        var icon = $(this).find(".open-close-icon");

        if (panel.css("display") === "flex") {
            icon.html("+");
            panel.css("display", "none");
        } else {
            icon.html("-");
            panel.css("display", "flex");
        }
    });

    function displayTeamMembers(teamArray) {
        const teamHTML = teamArray.map(item => `
            <div class="card-div">
                <div class="card-img">
                    <img src="${item.img_src}" alt="image">
                </div>
                <div class="card-body">
                    <div class="card-name">
                        <h3 class="name-div">${item.name}</h3>
                        <p class="name-details">${item.position}</p>
                    </div>
                    <div class="linkedin-img">       
                       <a href="#"><img src="assets/icons/LinkedinLogo.png" alt="img"></a>
                    </div>
                </div>
            </div>`).join('');
        $(".card-container").html(teamHTML);
    }

    function displayTeamTitle(teamTitleDetails) {
        if (teamTitleDetails) {
            $(".card-title").html(`${teamTitleDetails.title} (2)`)
        }
    }

    // initially active tab
    const initialTeam = allTeams.filter((team) => team.title === "Directors");
    $(".btnTeam").first().addClass("activeBtn");
    displayTeamMembers(initialTeam);
    displayTeamTitle(initialTeam[0]);

    // onClick active tab
    $(".btnTeam").on("click", function () {
        $(".btnTeam").removeClass("activeBtn");
        $(this).addClass("activeBtn");

        const teamName = $(this).text();
        const filteredTeam = allTeams.filter((team) => team.title === teamName);
        displayTeamMembers(filteredTeam);
        displayTeamTitle(filteredTeam[0]);
    });

    function displayAllCategories(categoryArray) {

        const allCategoryData = categoryArray.map(category =>
            `<div class="info-div-card">
                <div>
                    <img src="${category.img_src}" alt="img">
                </div>
                <div class="info-div-card-content">
                    <h3>${category.content}</h3>
                    <h3>${category.cat_title}</h3>
                </div>
            </div>`
        ).join("");
        $(".info-filter-grid").html(allCategoryData)
    }

    // initially active category
    const initialCategory = allCategory
    $(".btnFilter").first().addClass("activeBtn");
    displayAllCategories(initialCategory)

    // onclick active category
    $(".btnFilter").on("click", function () {
        $(".btnFilter").removeClass("activeBtn");
        $(this).addClass("activeBtn");

        const categoryName = $(this).text();
        const filteredCategory = categoryName === "All"
            ? allCategory
            : allCategory.filter((category) => category.cat_title === categoryName);
        displayAllCategories(filteredCategory);
    });

})