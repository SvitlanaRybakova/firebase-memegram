import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";

const useImage = (all) => {
	const { currentUser } = useAuthContext();

	// create ref to collection 'images'
	// const imagesRef = collection(db, "images");

	let queryRef;
	if (all) {
		queryRef = query(collection(db, "memes"), orderBy("created"));
	} else {
		queryRef = query(
			collection(db, "memes"),
			where("owner", "==", currentUser.uid),
			orderBy("created")
		);
	}

	const imagesQuery = useFirestoreQueryData(
		["images"],
		queryRef,
		{
			idField: "_id",
			subscribe: true,
		},
		{
			refetchOnMount: "always",
		}
	);

	return imagesQuery;
};

export default useImage;
