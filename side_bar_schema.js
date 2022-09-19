//// בשביל להבין אילו אלמנטים אנו צריכים לתפוס דרך הצבת משתנים, יש להיכנס לעץ ההיררכייה (דום)
//// של האתר ולהבין איך קוד האתר בנוי וכיצד ניתן לקרוא לאלמנט מסויים
/// !!חשוב לזכור - חשוב לעשות את ההתאמות המתאימות לסקריפט לכל אתר. לא כל האתרים אותו דבר 

if(window.location.pathname.indexOf('/blog/') > -1 ){

let sidebarSchema = document.querySelector('aside');
sidebarSchema.setAttribute('itemscope','');
sidebarSchema.setAttribute('itemtype','https://schema.org/WPSideBar');

let linksOfSidebar = document.querySelectorAll('Write class. / id# / types[] / elements /');
for(let i = 0; i < linksOfSidebar.length; i++){
    linksOfSidebar[i].setAttribute('itemprop','url');
}

let imagesOfSidebar = document.querySelectorAll('Write class. / id# / types[] / elements /');
for(let i = 0; i < imagesOfSidebar.length; i++){
    imagesOfSidebar[i].setAttribute('itemprop','image');
};

let headlineOfSidebar = document.querySelector('Write class. / id# / types[] / elements /');
headlineOfSidebar.setAttribute('itemprop','headline');

console.log(sidebarSchema);
}
