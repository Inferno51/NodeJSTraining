const title = document.title;
const headerTarget = document.getElementById("headerInfo");
headerTarget.innerHTML = `
        <header style="padding-bottom:20px">
            <h1>${title}</h1>
            <a href="../">
                Back to index</a>      
        </header>
`;