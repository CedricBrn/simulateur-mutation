function impression(aImprimer) {
    let content = document.getElementById(aImprimer).innerHTML;
    let fenetreImpression = window.open('', 'Impression', 'height=600,width=800');

    fenetreImpression.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/impression.css"></head><body>');
    fenetreImpression.document.write(content);
    fenetreImpression.document.write('</body></html>');
    fenetreImpression.document.close();
    fenetreImpression.focus();
    fenetreImpression.addEventListener("load",fenetreImpression.print());
    // fenetreImpression.print();
    // fenetreImpression.close();
    return true;
}

