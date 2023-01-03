export const createImage = async (id, imageInfo) => {
    try {
        const res = await fetch(`/api/images/${id}`, {
            method: 'POST',
            body: imageInfo,
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};

export const getImage = async (id) => {
    try {
        const res = await fetch(`/api/images/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return { error };
    }
};

export const getImageThumbnail = async (id) => {
    try {
        const res = await fetch(`/api/images/${id}/thumbnail`);
        const data = await res.json();
        return data;
    } catch (error) {
        return { error };
    }
};

export const updateImage = async (id, imageInfo) => {
    try {
        const res = await fetch(`/api/images/${id}`, {
            method: 'PUT',
            body: imageInfo
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};
  
export const removeImage = async (id) => {
    try {
        const res = await fetch(`/api/images/${id}`, {
            method: 'DELETE',
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};
  