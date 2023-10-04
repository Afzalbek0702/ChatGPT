import axios from "axios";
export const postServer = async (data) => {
	const options = {
		method: "POST",
		url: "https://lemurbot.p.rapidapi.com/chat",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": "47a78b333fmsha7f185d94bc8846p17d75fjsn2adc29b1d894",
			"X-RapidAPI-Host": "lemurbot.p.rapidapi.com",
		},
		data: {
			bot: "dilly",
			client: "d531e3bd-b6c3-4f3f-bb58-a6632cbed5e2",
			message: data,
		},
	};

	try {
		const response = await axios.request(options);
      // return response.data;
      return response.data.data.conversation.output;
	} catch (error) {
		return error;
	}
};
