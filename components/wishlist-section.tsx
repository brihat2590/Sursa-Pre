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

      toast.success("Your waitlist request has been submitted 🎉")
      setFormData({ Name: "", Email: "", Role: "", TeamSize: "" })
    } catch (err: any) {
      toast.error(`Failed to submit: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="waitlist-section"
      className="w-full px-4 sm:px-8 md:px-5 py-8 sm:py-16 md:py-20 flex justify-center"
    >
      <div className="w-full max-w-[720px]">
        <Card className="bg-gradient-to-b from-gray-50/5 to-transparent border-border">
          <CardHeader className="space-y-2 px-4 sm:px-8 md:px-6">
            <CardTitle className="text-foreground text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold leading-tight md:leading-[66px] text-center mb-3 sm:mb-6 md:mb-5 px-2 sm:px-0 md:px-0">
              Join the SursaKit waitlist
            </CardTitle>
            <p className="text-muted-foreground text-sm sm:text-lg md:text-base text-center px-2 sm:px-0 md:px-0">
              Join the waitlist to get early access to our AI-powered cloud editor.
            </p>
          </CardHeader>
          <CardContent className="px-4 sm:px-8 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-6">
              <div className="col-span-1">
                <Label htmlFor="Name" className="mb-2 text-sm sm:text-lg md:text-base">Name</Label>
                <Input
                  id="Name"
                  name="Name"
                  placeholder="Labanya Gurung"
                  required
                  className="mt-2 text-sm sm:text-lg md:text-base"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <Label htmlFor="Email" className="mb-2 text-sm sm:text-lg md:text-base">Email</Label>
                <Input
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="labanya@domain.com"
                  required
                  className="mt-2 text-sm sm:text-lg md:text-base"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <Label htmlFor="Role" className="mb-2 text-sm sm:text-lg md:text-base">Role</Label>
                <Input
                  id="Role"
                  name="Role"
                  placeholder="Chief Executive Officer"
                  required
                  className="mt-2 text-sm sm:text-lg md:text-base"
                  value={formData.Role}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <Label htmlFor="TeamSize" className="mb-2 text-sm sm:text-lg md:text-base">Number of team members</Label>
                <Input
                  id="TeamSize"
                  name="TeamSize"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  placeholder="10"
                  required
                  className="mt-2 text-sm sm:text-lg md:text-base"
                  value={formData.TeamSize}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1 md:col-span-2 mt-2">
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full md:w-auto px-6 sm:px-12 md:px-[30px] py-2 bg-primary text-secondary-foreground text-sm sm:text-lg md:text-base font-medium leading-6 rounded-[99px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.13)] hover:bg-secondary/90 transition-all duration-200 cursor-pointer"
                >
                  {loading ? "Submitting..." : "Join waitlist"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
