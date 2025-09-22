import { useState } from "react";
import { Calendar as RadixCalendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, CalendarDays } from "lucide-react";

interface AgentEvent {
  id: number;
  title: string;
  date: string;
  description?: string;
}

const AgentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<AgentEvent[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "" });

  const handleAddEvent = () => {
    if (!newEvent.title || !selectedDate) return;
    setEvents([
      ...events,
      {
        id: Date.now(),
        title: newEvent.title,
        date: selectedDate.toISOString().split("T")[0],
        description: newEvent.description,
      },
    ]);
    setShowAdd(false);
    setNewEvent({ title: "", date: "", description: "" });
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          Agent Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <RadixCalendar
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-lg border mb-4"
            />
            <Button size="sm" className="mb-4" onClick={() => setShowAdd(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
            {!showAdd && (
              <>
                <h3 className="font-semibold mb-2">Events for {selectedDate?.toLocaleDateString()}</h3>
                <ul className="space-y-2">
                  {events.filter(e => e.date === selectedDate?.toISOString().split("T")[0]).length === 0 && (
                    <li className="text-muted-foreground">No events for this date.</li>
                  )}
                  {events
                    .filter(e => e.date === selectedDate?.toISOString().split("T")[0])
                    .map(e => (
                      <li key={e.id} className="p-2 rounded bg-secondary/30">
                        <div className="font-medium">{e.title}</div>
                        {e.description && <div className="text-xs text-muted-foreground">{e.description}</div>}
                      </li>
                    ))}
                </ul>
              </>
            )}
            {showAdd && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-card p-6 rounded shadow-lg w-full max-w-md relative">
                  <Button size="sm" className="absolute top-2 right-2" onClick={() => setShowAdd(false)}>
                    Close
                  </Button>
                  <h3 className="font-bold mb-2">Add Event</h3>
                  <input
                    className="w-full border rounded px-2 py-1 mb-2"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                  />
                  <textarea
                    className="w-full border rounded px-2 py-1 mb-2"
                    placeholder="Description (optional)"
                    value={newEvent.description}
                    onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                  />
                  <Button size="sm" onClick={handleAddEvent}>
                    Save Event
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCalendar;
