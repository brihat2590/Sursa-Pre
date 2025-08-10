"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WishlistSection() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Role: "",
    TeamSize: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.Name || !formData.Email || !formData.Role || !formData.TeamSize) {
      toast.error("Please fill in all fields")
      return
    }

    setLoading(true)

    try {
      const res = await fetch(
        "https://cloud.activepieces.com/api/v1/webhooks/aJGtNLuqTL15K45kzm3nr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)

      toast.success("Your wishlist request has been submitted 🎉")
      setFormData({ Name: "", Email: "", Role: "", TeamSize: "" })
    } catch (err: any) {
      toast.error(`Failed to submit: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="wishlist-section"
      className="w-full px-5 py-12 md:py-20 flex justify-center"
    >
      <div className="w-full max-w-[720px]">
        <Card className="bg-gradient-to-b from-gray-50/5 to-transparent border-border">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl font-semibold">
              Join the SursaKit wishlist
            </CardTitle>
            <p className="text-muted-foreground">
              Be the first to access our AI-powered cloud editor. Tell us about
              you and your team.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="col-span-1">
                <Label htmlFor="Name">Name</Label>
                <Input
                  id="Name"
                  name="Name"
                  placeholder="Alex Johnson"
                  required
                  value={formData.Name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <Label htmlFor="Email">Email</Label>
                <Input
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="alex@example.com"
                  required
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <Label htmlFor="Role">Role</Label>
                <Input
                  id="Role"
                  name="Role"
                  placeholder="Frontend Engineer"
                  required
                  value={formData.Role}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <Label htmlFor="TeamSize">Number of team members</Label>
                <Input
                  id="TeamSize"
                  name="TeamSize"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  placeholder="5"
                  required
                  value={formData.TeamSize}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1 md:col-span-2 mt-2">
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full md:w-auto rounded-full px-6"
                >
                  {loading ? "Submitting..." : "Join wishlist"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
