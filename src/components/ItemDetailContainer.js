import { getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { prodCollection } from "../firebase";
import ItemDetail from "./ItemDetail";
import CositoCargando from "./CositoCargando";

const ItemDetailCointainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getJustOneItem = () => {
    const getItem = async () => {
      const constrain = where("id", "==", parseInt(id));
      const queryForId = query(prodCollection, constrain);
      const prodDocument = await getDocs(queryForId);

      const prodDocRef = prodDocument.docs;

      const prodForm = prodDocRef.map((p) => {
        return { ...p.data() };
      });
      const itm = prodForm[0];

      console.log(itm, "esta es del detail");
      setItemDetail(itm);
      setLoading(false);
    };
    getItem();
    // TOCAR ACAA
  };

  useEffect(() => {
    getJustOneItem();
  }, [id]);

  return loading ? (
    <CositoCargando/>
  ) : (
    <div className="container">
      <ItemDetail itm={itemDetail} />
    </div>
  );
};

export default ItemDetailCointainer;
