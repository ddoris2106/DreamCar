export const createBrand = async (brandInfo) => {
    try {
        const res = await fetch('/api/brand', {
            method: 'POST',
            body: brandInfo,
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};
  
export const getBrand = async () => {
    try {
        const res = await fetch('/api/brand');
        const data = await res.json();
        return data;
    } catch (error) {
        return { error };
    }
};

export const updateBrand = async (id, brandInfo) => {
    try {
        const res = await fetch(`/api/brand/${id}`, {
            method: 'PUT',
            body: brandInfo
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};
  
export const removeBrand = async (id) => {
    try {
        const res = await fetch(`/api/brand/${id}`, {
            method: 'DELETE',
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};
  