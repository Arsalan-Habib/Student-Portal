// utility function for converting image file to base64 string.
export default async function encodeImage(image) {
	return new Promise((resolve, reject) => {
		var reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onloadend = () => {
			resolve(reader.result);
		};
		reader.onerror = reject;
	});
}
