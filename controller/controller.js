const catchAsync = require("./../utils/catchAsync");
const { getLinkPreview } = require("link-preview-js");

exports.googleBot = catchAsync(async (req, res, next) => {
	if (!req.body.url) res.status(400).json({ message: "Enter the url!" });
	const targetURL = req.body.url;

	const customHeaders = {
		googleBot: {
			"user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
		},
		twitterBot: {
			"user-agent": "Twitterbot/2.1",
		},
	};

	const googleBotData = await getLinkPreview(targetURL, {
		headers: customHeaders.googleBot,
		followRedirects: "follow",
	});

	const twitterBotData = await getLinkPreview(targetURL, {
		headers: customHeaders.twitterBot,
		followRedirects: "follow",
	});
	res.status(200).json({
		"GoogleBot Link Preview Data:":
			googleBotData.title != "" ? googleBotData : undefined,
		"TwitterBot Link Preview Data:":
			twitterBotData.title != "" ? twitterBotData : undefined,
		message:
			googleBotData.title == "" && twitterBotData.title == ""
				? "Unable to fetch data using both twitter and google bot please try with other link"
				: undefined,
	});
});
