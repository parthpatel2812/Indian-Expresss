import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { CardWrapper, HeadingStyle, ImageTitle, TextStyle } from "./style";
import titleBaseUrl from "../../assets/title-base.png";
import { client } from "../../contentful/client";

export const MENU_SECTION_ID = "menu-section";

export const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [lunch, setLunch] = useState<any[]>([]);
  const [dinner, setDinner] = useState<any[]>([]);
  const [rice, setRice] = useState<any[]>([]);
  const [drinks, setDrinks] = useState<any[]>([]);
  const [currie, setCurrie] = useState<any[]>([]);
  const [specials, setSpecials] = useState<any[]>([]);
  const [biryani, setBiryani] = useState<any[]>([]);
  const [title, setTitle] = useState<any[]>([]);
  const [address, setAddress] = useState<any[]>([]);
  const [number, setNumber] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recipes data
        const recipesEntries = await client.getEntries({
          content_type: "recipes",
        });
        setRecipes(recipesEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch recipes data from Contentful");
        console.error("Error fetching recipes:", err);
      }
    };

    const fetchLunchData = async () => {
      try {
        // Fetch lunch data
        const lunchEntries = await client.getEntries({ content_type: "lunch" });
        setLunch(lunchEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false); // Set loading to false once both requests are completed
      }
    };

    const fetchDinnerData = async () => {
      try {
        // Fetch Dinner data
        const dinnerEntries = await client.getEntries({
          content_type: "dinner",
        });
        setDinner(dinnerEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false); // Set loading to false once both requests are completed
      }
    };

    const fetchRiceDelicacies = async () => {
      try {
        // Fetch Dinner data
        const riceEntries = await client.getEntries({
          content_type: "riceDelicacies",
        });
        setRice(riceEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false); // Set loading to false once both requests are completed
      }
    };

    const fetchDrinks = async () => {
      try {
        // Fetch Dinner data
        const drinksEntries = await client.getEntries({
          content_type: "drinks",
        });
        setDrinks(drinksEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false); // Set loading to false once both requests are completed
      }
    };

    const fetchSpecials = async () => {
      try {
        const drinksEntries = await client.getEntries({
          content_type: "specials",
        });
        setSpecials(drinksEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchCurrie = async () => {
      try {
        const drinksEntries = await client.getEntries({
          content_type: "curris",
        });
        setCurrie(drinksEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchBiryani = async () => {
      try {
        const drinksEntries = await client.getEntries({
          content_type: "biryanis",
        });
        setBiryani(drinksEntries.items.map((item: any) => item.fields));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchheadingData = async () => {
      try {
        const headingEntries = await client.getEntries({
          content_type: "heading",
        });
        setTitle(headingEntries.items.map((item: any) => item.fields.title));
        setAddress(
          headingEntries.items.map((item: any) => item.fields.address)
        );
        setNumber(headingEntries.items.map((item: any) => item.fields.number));
      } catch (err) {
        setError("Failed to fetch lunch data from Contentful");
        console.error("Error fetching lunch data:", err);
      } finally {
        setLoading(false); // Set loading to false once both requests are completed
      }
    };

    fetchData();
    fetchLunchData();
    fetchDinnerData();
    fetchRiceDelicacies();
    fetchDrinks();
    fetchheadingData();
    fetchSpecials();
    fetchCurrie();
    fetchBiryani();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <HeadingStyle id={MENU_SECTION_ID}>{title}</HeadingStyle>
      <ImageTitle src={titleBaseUrl} alt="Title Image" />
      <TextStyle>{address}</TextStyle>

      <TextStyle>{number}</TextStyle>

      <CardWrapper>
        {dinner.length > 0 && (
          <>
            {dinner.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}
        {recipes.length > 0 && (
          <>
            {recipes.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}
        {lunch.length > 0 && (
          <>
            {lunch.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}

        {rice.length > 0 && (
          <>
            {rice.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}
        {drinks.length > 0 && (
          <>
            {drinks.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}

        {specials.length > 0 && (
          <>
            {specials.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}

        {currie.length > 0 && (
          <>
            {currie.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}

        {biryani.length > 0 && (
          <>
            {biryani.map((entry, index) => (
              <Card key={index} categoryData={entry} />
            ))}
          </>
        )}

        {recipes.length === 0 &&
          lunch.length === 0 &&
          dinner.length === 0 &&
          rice.length === 0 &&
          drinks.length === 0 &&
          specials.length === 0 &&
          currie.length === 0 &&
          biryani.length === 0 && <p>No data available</p>}
      </CardWrapper>
      <br />
      <br />
      <br />

      {/* <TextStyle>SWAMINARAYAN: S & JAIN: J</TextStyle> */}
      {/* <TextStyle>Catering option availa</TextStyle> */}
    </>
  );
};
