export const createCar = async (carInfo) => {
    try {
        const res = await fetch('/api/car', {
            method: 'POST',
            body: carInfo,
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};

// For gettiing all cars
export const getCar = async () => {
    try {
        const res = await fetch('/api/car');
        const data = await res.json();
        return data;
    } catch (error) {
        return { error };
    }
};

// For getting car with filters/search
export const getCar = async (params) => {
    try {
        const res = await fetch(`/api/car?${params}`);
        const data = await res.json();
        return data;
    } catch (error) {
        return { error };
    }
};

export const updateCar = async (id, carInfo) => {
    try {
        const res = await fetch(`/api/car/${id}`, {
            method: 'PUT',
            body: carInfo
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};
  
export const removeCar = async (id) => {
    try {
        const res = await fetch(`/api/car/${id}`, {
            method: 'DELETE',
        });
        return res.json();
    } catch (error) {
        return { error };
    }
};
  