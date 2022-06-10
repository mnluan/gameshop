function clearcart(){
    localStorage.removeItem("id");
    document.location.reload(true);
    location.href='../index.html';
}

clearcart();