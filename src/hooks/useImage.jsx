import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";

const useImage = () => {
  	const { currentUser } = useAuthContext();

	// create ref to collection 'images'
	// const imagesRef = collection(db, "images");

  const queryRef = query(
		collection(db, "memes"),
		where("owner", "==", currentUser.uid),
		orderBy("created")
  );

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
