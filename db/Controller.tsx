import { onValue, ref, remove, set } from "firebase/database"
import { IAnimes } from "../typing.d.ts"
import { db } from "./firebaseConfig"
import { useState } from "react"
import { User } from "firebase/auth"

interface Props {
  Anime: IAnimes
  user: User
}

interface AnimeList {
  content: IAnimes
}

export async function FavoriteClick({ Anime, user }: Props) {
  const list = await getList(user)
  const added = list.some((i) => i.id === Anime.id)
  if (added) {
    removeToList({ Anime, user })
  } else {
    addToList({ Anime, user })
  }
}

export function getList(user: User): Promise<IAnimes[]> {
  const favorites = ref(db, `users/${user.uid}/favorites`);

  return new Promise((resolve, reject) => {
    onValue(
      favorites,
      (snapshot) => {
        const data = snapshot.val();

        // Verifique se há dados antes de prosseguir
        if (data) {
          const animeList: AnimeList[] = Object.values(data);
          const contentList: IAnimes[] = animeList.map((item) => item.content);
          resolve(contentList);
        } else {
          resolve([]); // Retorna uma lista vazia se não houver dados
        }
      },
      (error) => {
        reject(error); // Rejeita a promessa em caso de erro
      }
    );
  });
}

export function addToList({ Anime, user }: Props) {
  set(ref(db, `users/${user.uid}/favorites/${Anime.id}`), {
    content: Anime
  })
}

export function removeToList({ Anime, user }: Props) {
  remove(ref(db, `users/${user.uid}/favorites/${Anime.id}`))
}