import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =
    [
      {
        "source": { "id": "bbc-sport", "name": "BBC Sport" },
        "author": null,
        "title": "Reaction to Man Utd's exit from Europe",
        "description": "Man Utd are out of the Champions League and finish bottom of their group, while Arsenal draw at PSV Eindhoven, plus all the latest football news.",
        "url": "http://www.bbc.co.uk/sport/live/football/67700632",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2023-12-13T07:52:19.841006Z",
        "content": "Manchester United boss Erik ten Hag, speaking to TNT Sports after full-time, on his side's exit from European competition: \"We didn't lose it today, that's clear. We had good performances but also we… [+898 chars]"
      },
      {
        "source": { "id": "bleacher-report", "name": "Bleacher Report" },
        "author": "David Kenyon",
        "title": "Unique Stats from the 2023 College Football Regular Season",
        "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
        "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
        "publishedAt": "2023-12-12T12:00:00Z",
        "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
      },
      {
        "source": { "id": "talksport", "name": "TalkSport" },
        "author": "161385360554578",
        "title": "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
        "description": "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Declan Ri…",
        "url": "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
        "publishedAt": "2023-12-06T09:06:42Z",
        "content": "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]"
      },
      {
        "source": { "id": "talksport", "name": "TalkSport" },
        "author": "Josh Fordham",
        "title": "Tottenham fans feared relegation without Harry Kane but Ange Postecoglou has got them scoring more...",
        "description": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you can’t blame them. Not only was he their record goalscorer, but also one of the best strikers in world football seaso…",
        "url": "https://talksport.com/football/1666888/tottenham-goals-harry-kane-ange-postecoglou/",
        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/Kane_Postecoglou-Comp.png?strip=all&quality=100&w=1500&h=1000&crop=1",
        "publishedAt": "2023-12-05T17:57:19Z",
        "content": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you cant blame them.\r\nNot only was he their record goalscorer, but also one of the best strikers in world football season … [+2220 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
        "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
        "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
        "publishedAt": "2020-04-27T07:20:43Z",
        "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
      }
    ]


  constructor() {
    super();
    this.state = {
      articles: this.articles
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h3>NewsHero-Top Headlines</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0,45)} desc={element.description.slice(0,88)} imageURL={element.urlToImage} url={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News 