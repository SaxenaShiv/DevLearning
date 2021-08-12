let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"
let request = require("request");
let cheerio = require("cheerio");
// myTeamName name venue date opponentTeamName result
request(url,cb);
function cb(error,response,html){
    
    if(error){
        console.log(error);               //print the error message if occurred
    }else if(response.stautsCode == 404){
        console.log("Page Not Found")

    }else{
        
        dataExtractor(html);
    }
} 

function dataExtractor(html){
    let searchTool = cheerio.load(html);
    let anchorEle = searchTool('a[data-hover="View All Results"]');
    let link = anchorEle.attr("href");

    let fullAllmatchPageLink = `https://www.espncricinfo.com${link}`;

    console.log(fullAllmatchPageLink);
    request(fullAllmatchPageLink,allmatchPageCb)
}
function allmatchPageCb(error, response,html){
    if(error){
        console.log(error);               
    }else if(response.stautsCode == 404){
        console.log("Page Not Found")

    }else{
        // console.log(html)
        getAllScoreCardLink(html);
    }
}
function getAllScoreCardLink(html){
    console.log("``````````````````");
    let searchTool = cheerio.load(html);
    let scoreCardArr = searchTool("a[data-hover='Scorecard']");
    for(let i = 0; i < scoreCardArr.length;i++){
        let link = searchTool(scoreCardArr[i]).attr("href");
        let fullAllmatchPageLink = `https://www.espncricinfo.com${link}`;

        console.log(fullAllmatchPageLink);
    }

}