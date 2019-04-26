# Digital Learning Journey

***

## Landing Page
The Page is built with pure HTML, CSS and JS (no jQuery). As CSS Framework, the lightweight Library spectre.css is used. The main spectre file is linked via CDN. The Spectre Icons are part of this directory. More CSS is found in the `main.css` File as well as in the style Tag of the `index.html` where you can find some media queries.

Assets of the Project are the Company Photos and detail Slides. Both Sets are idenitified by its name, so if you want to change photos or detail Slides, you only have to exchange the file, but keep the Name.

## Web Service
The Webhook for sending Data from Landing Page is provided by Zapier. It connects the Webhook to a Google Data Sheet.

To add Data to the Sheet, you have to send a JSON Object in the Body of a POST-Request. The Object has the Column Titles as Properties and Values to fill in the Row Values.

```javascript
{
	"Teilnehmer": "",
	"LanaLabs": "",
	"Userlane": "",
	"iWelcome": "",
	"Agorize": "",
	"LeanIX": "",
	"Contiamo": "",
	"Acellere": "",
	"OneDot": "",
	"CrossEngage": "",
	"Innoactive": "",
	"NoMagic": "",
	"Chronext": "",
	"Statice": "",
	"adjust": "",
	"Circula": "",
	"Staffbase": "",
	"Unu": "",
	"Zeit": ""
}
```

## Deployment
The Page can be deployed as Static HTML Page. As Go-To Service Netlify is used. To deploy, just drop the Folder.

## Datasheet
Data will be displayed in Google Data Sheet