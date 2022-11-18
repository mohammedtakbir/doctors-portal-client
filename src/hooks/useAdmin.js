import { useEffect } from "react";
import { useState } from "react"

export const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5001/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false);
                })
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
} 