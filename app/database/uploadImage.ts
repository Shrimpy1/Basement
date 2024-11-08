'use server'

import {createClient} from "@/database/supabase/server";
import sharp from "sharp";

const supabase = await createClient()

export const uploadAndProcessImage = async (image: File) => {
    if (!image || !(image instanceof File)) {
        throw new Error('No valid image file provided')
    }

    const {data: {user}, error: userError} = await supabase.auth.getUser()

    if (userError || !user) {
        throw new Error('User not authenticated')
    }

    const userId = user.id
    const buffer = await image.arrayBuffer()
    const sizes = [100, 600]
    const uploadPromises = []

    for (const size of sizes) {
        const webpBuffer = await sharp(buffer)
            .resize(size, size, {fit: 'cover'})
            .webp({quality: 80})
            .toBuffer()

        const fileName = ``
    }
}
