import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/items";
import { fetchingActions } from "../store/fetching";

export default function FetchItems() {
  const dispatch = useDispatch();
  const fetching = useSelector((store) => store.fetching);

  async function fetchItems() {
    dispatch(fetchingActions.showLoading());
    const url = await fetch("http://localhost:8080/items");
    const data = await url.json();
    dispatch(fetchingActions.noLoading());
    dispatch(itemActions.addItems(data.items[0]));
  }

  useEffect(() => {
    fetchItems();
  }, []);
  return <></>;
}
